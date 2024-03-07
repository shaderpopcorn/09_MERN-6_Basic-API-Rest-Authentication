const { setError } = require("../../config/error");
const { Student } = require("../models/student");
const { Subject } = require("../models/subject");
const mongoose = require("mongoose");

const getStudentsOfSubjectByID = async (req, res, next) => {
  try {
    const subject = await Subject.findById(req.params.id).populate("students");
    res.status(200).json(subject.students);
  } catch (err) {
    return next(setError(400, err));
  }
};

const getSubjectsOfStudentByID = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).populate("subjects");
    console.log(student);
    res.status(200).json(student.subjects);
  } catch (err) {
    return next(setError(400, err));
  }
};

// PUT
const updateStudentsOfSubjectByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldSubject = await Subject.findById(id);
    const updatedSubject = new Subject(req.body);
    updatedSubject._id = id;

    //converting to strings so that 'new Set' can make a unique Array from it
    const old = oldSubject.students.toString().split(",");
    const updated = updatedSubject.students.toString().split(",");
    const allStudents = [...old, ...updated];
    const uniqueSet = [...new Set(allStudents)];

    // converting back to Array of Object-IDs
    // TODO

    // old approach with trying to get a unique array of Object-IDs
    // if (updatedSubject.students) {
    //   const uniqueSet = new Set([
    //     ...oldSubject.students,
    //     ...updatedSubject.students,
    //   ]);
    //   updatedSubject.students = Array.from(uniqueSet);
    // }

    // const newSubjectInfo = await Subject.findByIdAndUpdate(id, updatedSubject, {
    //   new: true,
    // });
    // return res.status(200).json(newSubjectInfo);
  } catch (err) {
    return next(setError(400, err));
  }
};

// PUT
const updateSubjectsOfStudentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldStudent = await Student.findById(id);
    const updatedStudent = new Student(req.body);
    updatedStudent._id = id;

    if (updatedStudent.subjects) {
      const uniqueSet = new Set([
        ...oldStudent.subjects,
        ...updatedStudent.subjects,
      ]);
      updatedStudent.subjects = Array.from(uniqueSet);
    }

    const newStudentInfo = await Student.findByIdAndUpdate(id, updatedStudent, {
      new: true,
    });

    return res.status(200).json(newStudentInfo);
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = {
  getStudentsOfSubjectByID,
  getSubjectsOfStudentByID,
  updateStudentsOfSubjectByID,
  updateSubjectsOfStudentByID,
};
