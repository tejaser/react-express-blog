var express = require('express');
var swig = require('swig');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Routes defination
var index = require('./routes/index');
var api = require('./routes/api');
var admin = require('./routes/admin');
var posts = require('./routes/posts');
var projects = require('./routes/projects');

var app = express();

// declaring the port from environment
app.set('port', (process.env.PORT || 8080));

// view engine setup
var swig = new swig.Swig();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Initialize the routes
app.use('/', index);
app.use('/api', api);
app.use('/admin', admin);
app.use('/posts', posts);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// log enabling us to know which port we are listening to

app.listen(app.get('port'), function() {
    console.log("Listening to", app.get('port'));

});

module.exports = app;
