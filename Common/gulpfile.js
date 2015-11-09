'use strict';

let gulp = require('gulp');
let config = require('./config.json');

let rootPath = config.macProjectRoot;
if (process.platform == 'win32') { rootPath = config.winProjectRoot }

let patternsPath13 = rootPath + 'React.13/';
let patternsPath14 = rootPath + 'React.14/';
let patternsPath14c = rootPath + 'React.14.Common/';
let commonPath = '/ui-src/components/common/';

let destPath12 = rootPath + 'React.12/';
let destPath13 = rootPath + 'React.13/';
let destPath14 = rootPath + 'React.14/';
let destPath14c = rootPath + 'React.14.Common/';
let destPathDist = '/ui-dist';
let destPathCss = '/ui-src/css';
let destPathImg = '/ui-src/img';

let source = {
	leaficon: rootPath + 'Common/img/favicon.ico',
	transshim: rootPath + 'Common/img/1x1TransShim.gif',
}

let source14 = {
	jbutton: patternsPath14c + 'Buttons' + commonPath + 'jButton.js',
	jdropmenu: patternsPath14c + 'DropDown' + commonPath + 'jDropMenu.js',
	jdropselect: patternsPath14c + 'DropDown' + commonPath + 'jDropSelect.js',
	jinput: patternsPath14c + 'FormInputs' + commonPath + 'jInput.js',
	jlist: patternsPath14c + 'List' + commonPath + 'jList.js',
	jprogressbar: patternsPath14c + 'ProgressBar' + commonPath + 'jProgressBar.js',
	jrangeslider: patternsPath14c + 'RangeSlider' + commonPath + 'jRangeSlider.js',
	jtooltip: patternsPath14c + 'Tooltip' + commonPath + 'jTooltip.js',
	jtreeview: patternsPath14c + 'TreeView' + commonPath + 'jTreeView.js',
	jtreeviewb: patternsPath14c + 'TreeView' + commonPath + 'jTreeViewB.js',
	indexcss: patternsPath14 + 'Basic/ui-src/css/index.css'
};

let dest14 = {
	chromecast: destPath14 + 'ChromeCast' + commonPath,
	draganddrop: destPath14 + 'DragAndDrop' + commonPath,
	refluxpages: destPath14 + 'ReFluxPages' + commonPath,
	rangeslider: destPath14c + 'RangeSlider' + commonPath,
	tooltip: destPath14c + 'Tooltip' + commonPath,
	treeview: destPath14c + 'TreeView' + commonPath
}

gulp.task('chromecast', function() {
	gulp.src(source14.jbutton).pipe(gulp.dest(dest14.chromecast));
	gulp.src(source14.jprogressbar).pipe(gulp.dest(dest14.chromecast));
});

gulp.task('draganddrop', function() {
	gulp.src(source14.jlist).pipe(gulp.dest(dest14.draganddrop));
});

gulp.task('rangeslider', function() {
	gulp.src(source14.jlist).pipe(gulp.dest(dest14.rangeslider));
});

gulp.task('refluxpages', function() {
	gulp.src(source14.jdropmenu).pipe(gulp.dest(dest14.refluxpages));
});

gulp.task('tooltip', function() {
	gulp.src(source14.jdropselect).pipe(gulp.dest(dest14.tooltip));
	gulp.src(source14.jinput).pipe(gulp.dest(dest14.tooltip));
	gulp.src(source14.jrangeslider).pipe(gulp.dest(dest14.tooltip));
});

gulp.task('treeview', function() {
	gulp.src(source14.jbutton).pipe(gulp.dest(dest14.treeview));
	gulp.src(source14.jdropmenu).pipe(gulp.dest(dest14.treeview));
	gulp.src(source14.jinput).pipe(gulp.dest(dest14.treeview));
});

gulp.task('favicon', function() {
	gulp.src(source.leaficon).pipe(gulp.dest(destPath12 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'BasicWebpack' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathImg));

	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ChromeCast' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'DragAndDrop' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ReFluxPages' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ReFluxSuperAgent' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ThirdParty/GoogleMaps' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ThirdParty/Radium' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'WindowEvents' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'WindowObject' + destPathImg));

	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'Buttons' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'DropDown' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'FormInputs' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'List' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'ProgressBar' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'RangeSlider' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathImg));
	gulp.src(source.transshim).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'TreeView' + destPathImg));
});

gulp.task('indexcss', function() {
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath12 + 'Basic' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'BasicWebpack' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathCss));

	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'ChromeCast' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'DragAndDrop' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxElectron' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxPages' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxSuperAgent' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'ThirdParty/GoogleMaps' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'ThirdParty/Radium' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'WindowEvents' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath14 + 'WindowObject' + destPathCss));

	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'Buttons' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'DropDown' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'FormInputs' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'List' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'ProgressBar' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'RangeSlider' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'TreeView' + destPathCss));
});

let defaultList = [
	'chromecast',
	'draganddrop',
	'rangeslider',
	'refluxpages',
	'tooltip',
	'treeview'
]

gulp.task('default', defaultList);
