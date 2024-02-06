const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mern6-db")
  .then(() => {
    console.log("Connected to MongoDB: mern6-db");
  })
  .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = mongoose;
