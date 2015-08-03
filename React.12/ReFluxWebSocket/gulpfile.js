var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var react = require('gulp-react');
var browserify = require('browserify');
var vsource = require("vinyl-source-stream");
var reactify = require('reactify');

var source = {
	appjs: './ui-src/app.js',
	js: ['./ui-src/**/*.js'],
	libjs: ['./ui-src/lib/primus/primus.js'],
	appcss: ['./ui-src/css/*.css'],
	apphtml: ['./ui-src/**/*.html']
};

gulp.task('appjs', function(){
	browserify(source.appjs)
		.transform(["reactify", {"es6": true}])
		.bundle()
		.pipe(vsource('app.min.js'))
		.pipe(gulp.dest('./ui-dist'));
});

gulp.task('libjs', function () {
	gulp.src(source.libjs)
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('./ui-dist'))
});

gulp.task('appcss', function () {
	gulp.src(source.appcss)
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./ui-dist'))
});

gulp.task('apphtml', function() {
	gulp.src(source.apphtml)
		.pipe(gulp.dest('./ui-dist'));
});

gulp.task('watch', function() {
	gulp.watch(source.appcss, ['appcss']);
	gulp.watch(source.apphtml, ['apphtml']);
	gulp.watch(source.js, ['appjs']);
});

gulp.task('default', ['appjs', 'libjs', 'appcss', 'apphtml', 'watch']);

gulp.task('nw', ['appjs', 'libjs', 'appcss', 'apphtml']);
