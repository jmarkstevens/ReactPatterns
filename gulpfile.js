var gulp = require('gulp');
var shell = require('gulp-shell');
var run = require('gulp-run');

gulp.task('basic13', function() {
	var cmd = new run.Command('cd');  // Create a command object for `cat`.
	cmd.exec('React.13/Basic');
})
