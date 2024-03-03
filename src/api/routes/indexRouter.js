const indexRouter = require("express").Router();
const { subjectRoutes } = require("./subject");
const { studentRoutes } = require("./student");
const { relationRoutes } = require("./relation");

indexRouter.use("/subjects", subjectRoutes);
indexRouter.use("/students", studentRoutes);
indexRouter.use("/relations", relationRoutes);

module.exports = { indexRouter };
