'use strict';

let gulp = require('gulp');
let config = require('./config.json');

let rootPath = config.macProjectRoot;
if (process.platform == 'win32') { rootPath = config.winProjectRoot }

let patternsPath13 = rootPath + 'React.13/';
let patternsPath13c = rootPath + 'React.13.Common/';
let patternsPath14 = rootPath + 'React.14/';
let patternsPath14c = rootPath + 'React.14.Common/';
let commonPath = '/ui-src/components/common/';

let destPath12 = rootPath + 'React.12/';
let destPath13 = rootPath + 'React.13/';
let destPath13c = rootPath + 'React.13.Common/';
let destPath14 = rootPath + 'React.14/';
let destPath14c = rootPath + 'React.14.Common/';
let destPathDist = '/ui-dist';
let destPathCss = '/ui-src/css';
let destPathImg = '/ui-src/img';

let source = {
	leaficon: rootPath + 'Common/img/favicon.ico',
	transshim: rootPath + 'Common/img/1x1TransShim.gif',
}
let source13 = {
	jdropselect: patternsPath13c + 'DropDown' + commonPath + 'jDropSelect.js',
	jinput: patternsPath13c + 'FormInputs' + commonPath + 'jInput.js',
	indexcss: patternsPath13 + 'Basic/ui-src/css/index.css'
};

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

let dest13 = {
	rangeandtooltip: destPath13c + 'RangeAndTooltip' + commonPath,
}

let dest14 = {
	draganddrop: destPath14 + 'DragAndDrop' + commonPath,
	refluxpages: destPath14 + 'ReFluxPages' + commonPath,
	rangeslider: destPath14c + 'RangeSlider' + commonPath,
	tooltip: destPath14c + 'Tooltip' + commonPath,
	treeview: destPath14c + 'TreeView' + commonPath
}

gulp.task('rangeandtooltip', function() {
	gulp.src(source13.jdropselect).pipe(gulp.dest(dest13.rangeandtooltip));
	gulp.src(source13.jinput).pipe(gulp.dest(dest13.rangeandtooltip));
});

gulp.task('tooltip', function() {
	gulp.src(source14.jdropselect).pipe(gulp.dest(dest14.tooltip));
	gulp.src(source14.jinput).pipe(gulp.dest(dest14.tooltip));
	gulp.src(source14.jrangeslider).pipe(gulp.dest(dest14.tooltip));
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
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'FluxReactWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/GoogleMaps' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/Radium' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/ReactBlock' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'WindowEvents' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'WindowObject' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'DropDown' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'FormInputs' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'List' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'RangeAndTooltip' + destPathImg));

	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'DragAndDrop' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ReFluxPages' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'Buttons' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'DropDown' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'FormInputs' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'List' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'ProgressBar' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'RangeAndTooltip' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'RangeSlider' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathImg));
	gulp.src(source.transshim).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14c + 'TreeView' + destPathImg));
});

gulp.task('indexcss', function() {
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath12 + 'Basic' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'BasicWebpack' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'DragAndDrop' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'FluxReactWebSocket' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxElectron' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxPages' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/GoogleMaps' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/Radium' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/ReactBlock' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'WindowEvents' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13 + 'WindowObject' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'Buttons' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'DropDown' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'FormInputs' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'List' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'ProgressBar' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'RangeAndTooltip' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'RangeSlider' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'Tooltip' + destPathCss));
	gulp.src(source13.indexcss).pipe(gulp.dest(destPath13c + 'TreeView' + destPathCss));

	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxElectron' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'Buttons' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'DropDown' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'FormInputs' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'List' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'ProgressBar' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'RangeAndTooltip' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'RangeSlider' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'Tooltip' + destPathCss));
	gulp.src(source14.indexcss).pipe(gulp.dest(destPath14c + 'TreeView' + destPathCss));
});

let defaultList = [
	'draganddrop',
	'rangeandtooltip',
	'refluxpages',
	'treeview',
	'rangeslider',
	'tooltip'
]

gulp.task('default', defaultList);
