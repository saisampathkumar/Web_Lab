const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student form details
const course_details = new Schema({
    courseName: String,
    professorName: String,
    credits: String,
    courseId: String
});

module.exports =  mongoose.model('course_details', course_details);