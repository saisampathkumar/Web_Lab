
module.exports = function (app, db) {
    let student_details = db.model('student_details');
    let profile_details = db.model('profile_details');
    let course_details = db.model('course_details');

    //api to search student details
    app.get('/course/search',(req,res)=>{
        let search_by = 'Lee';
        let query = {};
        query[search_by] = { $regex: 'Lee', $options: 'i' };
        course_details.find(query).exec((err, course) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: course
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching students list",
                    error: err.message
                });
            }
        });
    });
    //api to create student details
    app.post('/signup/register',(req,res) => {
        let student = req.body;
        let stud_details = new student_details({
            name: student.name ,
            email: student.email,
            password: student.password,
            created_on:new Date(),
            updated_on:new Date()
        });
        stud_details.save((err, student) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating student",
                    error: err.message
                });
            }
        })
    });

    app.post('/courseDetails/save',(req,res) => {
        console.log('hello');
        let course = req.body;
        let cou_details = new course_details({
            courseName: course.courseName ,
            professorName: course.professorName,
            credits: course.credits,
            courseId:course.courseId
        });
        cou_details.save((err, course) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating student",
                    error: err.message
                });
            }
        })
    });

    app.post('/signup/Fillup',(req,res) => {
        let profile = req.body;
        let prof_details = new profile_details({
            userId: profile.user_id,
            name: profile.name,
            email: profile.email,
            contact: profile.contact,
            age: profile.email,
            dob: profile.dob,
            department: profile.department,
            university: profile.university,
            address: profile.address,
            image: profile.image,
            created_on:new Date(),
            updated_on:new Date()
        });
        prof_details.save((err, profile) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating student",
                    error: err.message
                });
            }
        })
    });
};