const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const student_details = new Schema({
    name: String,
    email: String,
    password: String,
    created_on:Date,
    updated_on:Date
});


module.exports =  mongoose.model('student_details', student_details);