const mongoose = require("mongoose");

// A
const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    teacher: { type: String, required: true, trim: true },
    grade: { type: Number, required: true, trim: true },
    languages: [
      {
        type: String,
        required: true,
        enum: ["german", "english", "spanish"],
        trim: true,
      },
    ],
    students: [{ type: mongoose.Types.ObjectId, ref: "students" }],
  },
  {
    timestamps: true,
    collection: "subjects",
  }
);

const Subject = mongoose.model("subjects", subjectSchema);

module.exports = { Subject };
