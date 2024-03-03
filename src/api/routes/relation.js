const relationRoutes = require("express").Router();
const {
  getStudentsOfSubjectByID,
  getSubjectsOfStudentByID,
  updateStudentsOfSubjectByID,
  updateSubjectsOfStudentByID,
} = require("../controllers/relation");

relationRoutes.get("/getStudentsOfSubject/:id", getStudentsOfSubjectByID);
relationRoutes.get("/getSubjectsOfStudent/:id", getSubjectsOfStudentByID);
relationRoutes.put("/updateStudentsOfSubject/:id", updateStudentsOfSubjectByID);
relationRoutes.put("/updateSubjectsOfStudent/:id", updateSubjectsOfStudentByID);

module.exports = { relationRoutes };
