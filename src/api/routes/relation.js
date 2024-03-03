const relationRoutes = require("express").Router();
const {
  getStudentsOfSubjectByID,
  getSubjectsOfStudentByID,
  updateStudentsOfSubjectByID,
  updateSubjectsOfStudentsByID,
} = require("../controllers/relation");

relationRoutes.get("/getStudentsOfSubject/:id", getStudentsOfSubjectByID);
relationRoutes.get("/getSubjectsOfStudent/:id", getSubjectsOfStudentByID);
relationRoutes.put("/updateStudentsOfSubject/:id", updateStudentsOfSubjectByID);
relationRoutes.put(
  "/updateSubjectsOfStudents/:id",
  updateSubjectsOfStudentsByID
);

module.exports = { relationRoutes };
