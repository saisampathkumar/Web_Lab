const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student form details
const student_form_details = new Schema({
    courseId: String,
    name: String,
    email: String,
    contact: String,
    age: Number,
    university: String,
    address: String,
    created_on:Date,
    updated_on:Date
});

module.exports =  mongoose.model('student_form_details', student_form_details);