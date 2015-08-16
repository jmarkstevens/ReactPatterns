var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var webpack = require('webpack-stream');

var source = {
	appjs: './ui-src/app.js',
	js: ['./ui-src/**/*.js'],
	appcss: ['./ui-src/css/*.css'],
	apphtml: ['./ui-src/**/*.html'],
	appimg: ['./ui-src/img/*']
};

gulp.task('appjs', function(){
	gulp.src(source.appjs)
		.pipe(webpack({
				output: {filename: "app.min.js"},
				module: {loaders: [{test: /\.js$/, loader: 'babel'}]}
			}))
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
	gulp.src(source.appimg, {base: 'ui-src'})
		.pipe(gulp.dest('./ui-dist'));
});

gulp.task('watch', function() {
	gulp.watch(source.appcss, ['appcss']);
	gulp.watch(source.apphtml, ['apphtml']);
	gulp.watch(source.js, ['appjs']);
});

gulp.task('default', ['appjs', 'appcss', 'apphtml', 'watch']);

gulp.task('nw', ['appjs', 'appcss', 'apphtml']);
