const mongoose = require("mongoose");

// B
const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: Number, required: true },
    subjects: [{ type: mongoose.Types.ObjectId, ref: "subjects" }],
  },
  {
    timestamps: true,
    collection: "students",
  }
);

const Student = mongoose.model("students", studentSchema);

module.exports = { Student };
