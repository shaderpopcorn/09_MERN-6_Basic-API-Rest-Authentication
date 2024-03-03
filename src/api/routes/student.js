const studentRoutes = require("express").Router();
const {
  getAllStudents,
  getStudentByID,
  newStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

studentRoutes.get("/", getAllStudents);
studentRoutes.get("/:id", getStudentByID);
studentRoutes.post("/", newStudent);
studentRoutes.put("/:id", updateStudent);
studentRoutes.delete("/:id", deleteStudent);

module.exports = { studentRoutes };
