# 09_MERN-6_Basic-API-Rest-Authentication

ENDPOINTS FOR GENERAL SUBJECT CRUD REQUESTS:

Get All Subjects -> http://localhost:4001/api/subjects/

Get Subject By Id -> http://localhost:4001/api/subjects/<id_of_subject>

New Subject -> http://localhost:4001/api/subjects/

Update Subject By Id -> http://localhost:4001/api/subjects/<id_of_subject>

Delete Subject By Id -> http://localhost:4001/api/subjects/<id_of_subject>

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

ENDPOINTS FOR GENERAL STUDENT CRUD REQUESTS:

Get All Students -> http://localhost:4001/api/students/
Get Student By Id -> http://localhost:4001/api/students/<id_of_student>
New Student -> http://localhost:4001/api/students/
Update Student By Id -> http://localhost:4001/api/students/<id_of_student>
Delete Student By Id -> http://localhost:4001/api/students/<id_of_student>

student schema to use for JSON object at 'New Student' and 'Update Student By Id':

name: { type: String, required: true, trim: true },
image: { type: String, required: true, trim: true },
gender: { type: String, required: true },
age: { type: Number, required: true },
grade: { type: Number, required: true },

ENDPOINTS FOR RELATING SUBJECT - STUDENT CRUD REQUESTS:

Get Students of Subject By ID -> http://localhost:4001/api/relations/getStudentsOfSubject/<id_of_subject>
Update Students of Subject By ID -> http://localhost:4001/api/relations/updateStudentsOfSubject/<id_of_subject>

example to use for JSON object at 'getStudentsOfSubject' and 'updateStudentsOfSubject':
{
"students: "<id_of_student>"
}

Get Subjects of Student By ID -> http://localhost:4001/api/relations/getSubjectsOfStudent/<id_of_student>
Update Subjects of Student By ID -> http://localhost:4001/api/relations/updateSubjectsOfStudent/<id_of_student>

example to use for JSON object at 'getSubjectsOfStudent' and 'updateSubjectsOfStudent':
{
"subjects": "<id_of_subject>"
}
