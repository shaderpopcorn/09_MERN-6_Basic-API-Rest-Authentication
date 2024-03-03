const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB: mern6-db");
  })
  .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = mongoose;
