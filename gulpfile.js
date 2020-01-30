var exec = require('child_process').exec;

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');

gulp.task('start', function (done) {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'GOOGLE_APPLICATION_CREDENTIALS': '/Users/henrydewey/Desktop/hydroponic-dash/secret.json' }
  , done: done
  })
})
