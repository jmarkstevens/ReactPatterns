var gulp = require('gulp');
var config = require('./config.json');

var rootPath = config.macProjectRoot;
if (process.platform == 'win32') { rootPath = config.winProjectRoot }

var patternsPath13 = rootPath + 'React.13/';
var patternsPath13c = rootPath + 'React.13.Common/';
var commonPath = '/ui-src/components/common/';

var destPath12 = rootPath + 'React.12/';
var destPath13 = rootPath + 'React.13/';
var destPath13c = rootPath + 'React.13.Common/';
var destPath14 = rootPath + 'React.14/';
var destPathDist = '/ui-dist';
var destPathCss = '/ui-src/css';
var destPathImg = '/ui-src/img';

var source = {
	jbutton: patternsPath13c + 'Buttons' + commonPath + 'jButton.js',
	jdropmenu: patternsPath13c + 'DropDown' + commonPath + 'jDropMenu.js',
	jdropselect: patternsPath13c + 'DropDown' + commonPath + 'jDropSelect.js',
	jinput: patternsPath13c + 'FormInputs' + commonPath + 'jInput.js',
	jradiogroup: patternsPath13c + 'FormInputs' + commonPath + 'jRadioGroup.js',
	jlist: patternsPath13c + 'List' + commonPath + 'jList.js',
	jprogressbar: patternsPath13c + 'ProgressBar' + commonPath + 'jProgressBar.js',
	jrangeslider: patternsPath13c + 'RangeSlider' + commonPath + 'jRangeSlider.js',
	jrangeslider1: patternsPath13c + 'RangeAndTooltip' + commonPath + 'jRangeSlider.js',
	jtooltip: patternsPath13c + 'RangeAndTooltip' + commonPath + 'jTooltip.js',
	jtreeview: patternsPath13c + 'TreeView' + commonPath + 'jTreeView.js',
	jtreeviewb: patternsPath13c + 'TreeView' + commonPath + 'jTreeViewB.js',
	leaficon: patternsPath13 + 'Common/img/favicon.ico',
	transshim: patternsPath13 + 'Common/img/1x1TransShim.gif',
	indexcss: patternsPath13 + 'Basic/ui-src/css/index.css'
};

var dest = {
	draganddrop: destPath13 + 'DragAndDrop' + commonPath,
	refluxpages: destPath13 + 'ReFluxPages' + commonPath,
	rangeandtooltip: destPath13c + 'RangeAndTooltip' + commonPath,
	rangeslider: destPath13c + 'RangeSlider' + commonPath,
	tooltip: destPath13c + 'Tooltip' + commonPath,
	treeview: destPath13c + 'TreeView' + commonPath
}

gulp.task('rangeandtooltip', function() {
	gulp.src(source.jdropselect).pipe(gulp.dest(dest.rangeandtooltip));
	gulp.src(source.jinput).pipe(gulp.dest(dest.rangeandtooltip));
});

gulp.task('tooltip', function() {
	gulp.src(source.jdropselect).pipe(gulp.dest(dest.tooltip));
	gulp.src(source.jinput).pipe(gulp.dest(dest.tooltip));
	gulp.src(source.jrangeslider).pipe(gulp.dest(dest.tooltip));
});

gulp.task('draganddrop', function() {
	gulp.src(source.jlist).pipe(gulp.dest(dest.draganddrop));
});

gulp.task('rangeslider', function() {
	gulp.src(source.jlist).pipe(gulp.dest(dest.rangeslider));
});

gulp.task('refluxpages', function() {
	gulp.src(source.jdropmenu).pipe(gulp.dest(dest.refluxpages));
});

gulp.task('treeview', function() {
	gulp.src(source.jbutton).pipe(gulp.dest(dest.treeview));
	gulp.src(source.jdropmenu).pipe(gulp.dest(dest.treeview));
	gulp.src(source.jinput).pipe(gulp.dest(dest.treeview));
	gulp.src(source.jradiogroup).pipe(gulp.dest(dest.treeview));
});

gulp.task('favicon', function() {
	gulp.src(source.leaficon).pipe(gulp.dest(destPath12 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'Basic' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'BasicWebpack' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'DragAndDrop' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'FluxReactWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ReFluxPages' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/GoogleMaps' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/Radium' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'ThirdParty/ReactBlock' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'WindowEvents' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13 + 'WindowObject' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'Buttons' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'DropDown' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'FormInputs' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'List' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'ProgressBar' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'RangeAndTooltip' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'RangeSlider' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'Tooltip' + destPathImg));
	gulp.src(source.transshim).pipe(gulp.dest(destPath13c + 'Tooltip' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath13c + 'TreeView' + destPathImg));
	gulp.src(source.leaficon).pipe(gulp.dest(destPath14 + 'Basic' + destPathImg));
});

gulp.task('indexcss', function() {
	gulp.src(source.indexcss).pipe(gulp.dest(destPath12 + 'Basic' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'BasicWebpack' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'DragAndDrop' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'FluxReactWebSocket' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxElectron' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxPages' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/GoogleMaps' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/Radium' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'ThirdParty/ReactBlock' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'WindowEvents' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13 + 'WindowObject' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'Buttons' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'DropDown' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'FormInputs' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'List' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'ProgressBar' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'RangeAndTooltip' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'RangeSlider' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'Tooltip' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath13c + 'TreeView' + destPathCss));
	gulp.src(source.indexcss).pipe(gulp.dest(destPath14 + 'Basic' + destPathCss));
});

gulp.task('default', ['draganddrop', 'rangeandtooltip', 'refluxpages', 'treeview', 'rangeslider', 'tooltip']);
