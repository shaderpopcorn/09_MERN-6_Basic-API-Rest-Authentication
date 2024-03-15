require("dotenv").config();
require("./src/config/db");
const { indexRouter } = require("./src/api/routes/indexRouter");
const { setError } = require("./src/config/error");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", indexRouter);

app.use("*", (req, res, next) => {
  return next(setError(404, "Not found!"));
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Internal server error!");
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
