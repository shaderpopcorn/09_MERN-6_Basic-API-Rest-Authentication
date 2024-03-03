const { setError } = require("../../config/error");
const { Subject } = require("../models/subject");

// GET
const getAllSubjects = async (req, res, next) => {
  try {
    const allSubjects = await Subject.find();
    return res.status(200).json(allSubjects);
  } catch (err) {
    return next(setError(400, err));
  }
};

// GET
const getSubjectByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findById(id);
    return res.status(200).json(subject);
  } catch (err) {
    return next(setError(400, err));
  }
};

// POST
const newSubject = async (req, res, next) => {
  try {
    const SubjectExists = await Subject.findOne({ name: req.params.name });
    if (SubjectExists) {
      return res.status(400).json("Subject already exists!");
    } else {
      const newSubject = new Subject(req.body);
      const subjectInDB = await newSubject.save();
      return res.status(201).json(subjectInDB);
    }
  } catch (err) {
    return next(setError(400, err));
  }
};

// PUT
const updateSubject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldSubject = await Subject.findById(id);
    const updatedSubject = new Subject(req.body);
    updatedSubject._id = id;

    if (updatedSubject.students) {
      const uniqueSet = new Set([
        ...oldSubject.students,
        ...updatedSubject.students,
      ]);

      updatedSubject.students = Array.from(uniqueSet);
    }

    const newSubjectInfo = await Subject.findByIdAndUpdate(id, updatedSubject, {
      new: true,
    });

    return res.status(200).json(newSubjectInfo);
  } catch (err) {
    return next(setError(400, err));
  }
};

// DELETE
const deleteSubject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSubject = await Subject.findByIdAndDelete(id);
    res.status(200).json({
      confirmation: "Subject successfully deleted!",
      DeletedSubject: deletedSubject,
    });
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = {
  getAllSubjects,
  getSubjectByID,
  newSubject,
  updateSubject,
  deleteSubject,
};
