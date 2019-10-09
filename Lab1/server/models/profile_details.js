const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for profile form details
const profile_details = new Schema({
    userId: String,
    name: String,
    email: String,
    contact: String,
    age: Number,
    university: String,
    address: String,
    dob: String,
    image: String,
    yearJoined: String,
    department: String,
    major: String,
    created_on:Date,
    updated_on:Date
});

module.exports =  mongoose.model('profile_details', profile_details);