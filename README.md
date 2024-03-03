# 09_MERN-6_Basic-API-Rest-Authentication

ENDPOINTS FOR GENERAL STUDENT CRUD REQUESTS:

Get All Students -> http://localhost:4001/api/students/
Get Student By Id -> http://localhost:4001/api/students/<id_of_user>
New Student -> http://localhost:4001/api/students/
Update Student By Id -> http://localhost:4001/api/students/<id_of_user>
Delete Student By Id -> http://localhost:4001/api/students/<id_of_user>

student schema to use for JSON object at 'New Student' and 'Update Student By Id':

name: { type: String, required: true, trim: true },
image: { type: String, required: true, trim: true },
gender: { type: String, required: true },
age: { type: Number, required: true },
grade: { type: Number, required: true },
subjects: [
{
type: String,
required: true,
enum: [
"Math",
"Physics",
"Biology",
"Chemistry",
"History",
"English",
"Spanish",
"German",
"Sports",
"Music",
"IT",
],
},
],

ENDPOINTS FOR GENERAL SUBJECT CRUD REQUESTS:

Get All Subjects -> http://localhost:4001/api/subjects/
Get Subject By Id -> http://localhost:4001/api/subjects/<id_of_user>
New Subject -> http://localhost:4001/api/subjects/
Update Subject By Id -> http://localhost:4001/api/subjects/<id_of_user>
Delete Subject By Id -> http://localhost:4001/api/subjects/<id_of_user>

subject schema to use for JSON object at 'New Subject' and 'Update Subject By Id':

name: { type: String, required: true, trim: true },
image: { type: String, required: true, trim: true },
teacher: { type: String, required: true, trim: true },
languages: [
{
type: String,
required: true,
enum: ["german", "english", "spanish"],
trim: true,
},
],
students: [{ type: mongoose.Types.ObjectId, ref: "students" }],
