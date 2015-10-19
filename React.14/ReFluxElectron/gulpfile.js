'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let minifyCSS = require('gulp-minify-css');
let browserify = require('browserify');
let vsource = require("vinyl-source-stream");
let babel = require('babelify');
let shell = require('gulp-shell');
let config = require('./config.json');

let shellTaskArgument;
if (process.platform == 'win32') shellTaskArgument = config.winProjectRoot + '/node_modules/electron-prebuilt/dist/electron.exe ' + config.winProjectRoot;
else shellTaskArgument = './node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron ./../ReFluxElectron';

let source = {
	appjs: './ui-src/app.js',
	js: ['./ui-src/**/*.js'],
	appcss: ['./ui-src/css/*.css'],
	apphtml: ['./ui-src/**/*.html']
};

gulp.task('appjs', function(){
	browserify({ debug: true })
		.transform(babel.configure({stage: 0}))
		.require(source.appjs, { entry: true })
		.bundle()
		.pipe(vsource('app.min.js'))
		.pipe(gulp.dest('./ui-dist'));
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

gulp.task('default', ['appjs', 'appcss', 'apphtml', 'watch']);

gulp.task('nw', ['appjs', 'appcss', 'apphtml']);

gulp.task('run', shell.task([shellTaskArgument]));
