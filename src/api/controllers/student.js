const { setError } = require("../../config/error");
const { Student } = require("../models/student");

// GET
const getAllStudents = async (req, res, next) => {
  try {
    const allStudents = await Student.find();
    return res.status(200).json(allStudents);
  } catch (err) {
    return next(setError(400, err));
  }
};

// GET
const getStudentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    return res.status(200).json(student);
  } catch (err) {
    return next(setError(400, err));
  }
};

// POST
const newStudent = async (req, res, next) => {
  try {
    const StudentExists = await Student.findOne({ name: req.params.name });
    if (StudentExists) {
      return res.status(400).json("Student already exists!");
    } else {
      const newStudent = new Student(req.body);
      const studentInDB = await newStudent.save();
      return res.status(201).json(studentInDB);
    }
  } catch (err) {
    return next(setError(400, err));
  }
};

// PUT
const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, payload, {
      new: true,
    });
    res.status(200).json(updatedStudent);
  } catch (err) {
    return next(setError(400, err));
  }
};

// DELETE
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.status(200).json({
      confirmation: "Student Successfully Deleted!",
      DeletedStudent: deletedStudent,
    });
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = {
  getAllStudents,
  getStudentByID,
  newStudent,
  updateStudent,
  deleteStudent,
};
