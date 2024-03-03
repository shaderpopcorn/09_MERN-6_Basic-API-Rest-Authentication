const subjectRoutes = require("express").Router();
const {
  getAllSubjects,
  getSubjectByID,
  newSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/subject");

subjectRoutes.get("/", getAllSubjects);
subjectRoutes.get("/:id", getSubjectByID);
subjectRoutes.post("/", newSubject);
subjectRoutes.put("/:id", updateSubject);
subjectRoutes.delete("/:id", deleteSubject);

module.exports = { subjectRoutes };
