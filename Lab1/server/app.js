let createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');
const db = require('mongoose'),
    cors = require('cors'),
    config = require('./config'),
    db_string = 'mongodb://'+config.db_user+':'+config.db_pswd+'@ds331558.mlab.com:31558/web_lab1';

//initializing schema
require('./models/student_details')
require('./models/profile_details')
require('./models/course_details')

//connection for DB
var db_promise = db.connect(db_string,{ useNewUrlParser: true });
db_promise.then((data) => {
    console.log("Database connection is successfull !");
}).catch(reason => {
    console.log("Database connection is unsuccessfull ! : "+reason.message);
})
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Rest APIs
require('./controllers/')(app, db);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
