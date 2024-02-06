const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  category: String,
  type: String,
  maxUsers: String,
  password: String,
  imageUrl: String,
});

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room };
