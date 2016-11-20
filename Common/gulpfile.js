'use strict';

let gulp = require('gulp');
let config = require('./config.json');

let rootPath = config.macProjectRoot;
if (process.platform == 'win32') { rootPath = config.winProjectRoot; }

let patternsPath15 = rootPath + 'React.15/';
let patternsPath15c = rootPath + 'React.15.Common/';
let commonPath = '/ui-src/components/common/';

let destPath15 = rootPath + 'React.15/';
let destPath15c = rootPath + 'React.15.Common/';
// let destPathDist = '/ui-dist';
let destPathCss = '/ui-src/css';
let destPathImg = '/ui-src/img';

let source = {
  leaficon: rootPath + 'Common/img/favicon.ico',
  transshim: rootPath + 'Common/img/1x1TransShim.gif',
};

let source15 = {
  jbutton: patternsPath15c + 'Buttons' + commonPath + 'jButton.jsx',
  jdropmenu: patternsPath15c + 'DropDown' + commonPath + 'jDropMenu.jsx',
  jdropselect: patternsPath15c + 'DropDown' + commonPath + 'jDropSelect.jsx',
  jinput: patternsPath15c + 'FormInputs' + commonPath + 'jInput.jsx',
  jlist: patternsPath15c + 'List' + commonPath + 'jList.jsx',
  jprogressbar: patternsPath15c + 'ProgressBar' + commonPath + 'jProgressBar.jsx',
  jrangeslider: patternsPath15c + 'RangeSlider' + commonPath + 'jRangeSlider.jsx',
  jtooltip: patternsPath15c + 'Tooltip' + commonPath + 'jTooltip.jsx',
  jtreeview: patternsPath15c + 'TreeView' + commonPath + 'jTreeView.jsx',
  jtreeviewb: patternsPath15c + 'TreeView' + commonPath + 'jTreeViewB.jsx',
  indexcss: patternsPath15 + 'Basic/ui-src/css/index.css'
};

let dest15 = {
  draganddrop: destPath15 + 'DragAndDrop' + commonPath,
  gallery: destPath15c + 'Gallery' + commonPath,
  progressbar: destPath15c + 'ProgressBar' + commonPath,
  refluxpages: destPath15 + 'ReFluxPages' + commonPath,
  rangeslider: destPath15c + 'RangeSlider' + commonPath,
  tooltip: destPath15c + 'Tooltip' + commonPath,
  treeview: destPath15c + 'TreeView' + commonPath
};

gulp.task('chromecast', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest15.chromecast));
  gulp.src(source15.jprogressbar).pipe(gulp.dest(dest15.chromecast));
});

gulp.task('draganddrop', function() {
  gulp.src(source15.jlist).pipe(gulp.dest(dest15.draganddrop));
});

gulp.task('gallery', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest15.gallery));
});

gulp.task('progressbar', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest15.progressbar));
});

gulp.task('refluxpages', function() {
  gulp.src(source15.jdropmenu).pipe(gulp.dest(dest15.refluxpages));
});

gulp.task('treeview', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest15.treeview));
  gulp.src(source15.jdropmenu).pipe(gulp.dest(dest15.treeview));
  gulp.src(source15.jinput).pipe(gulp.dest(dest15.treeview));
});

gulp.task('favicon', function() {

  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'Basic' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ChromeCast' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'DragAndDrop' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ReFluxPages' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ReFluxSuperAgent' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ReFluxWebSocket' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ThirdParty/GoogleMaps' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'ThirdParty/Radium' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'WindowEvents' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15 + 'WindowObject' + destPathImg));

  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'Buttons' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'DropDown' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'FormInputs' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'List' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'ProgressBar' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'RangeSlider' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'Tooltip' + destPathImg));
  gulp.src(source.transshim).pipe(gulp.dest(destPath15c + 'Tooltip' + destPathImg));
  gulp.src(source.leaficon).pipe(gulp.dest(destPath15c + 'TreeView' + destPathImg));
});

gulp.task('indexcss', function() {
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicHot' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicIsometric' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicUnitTest' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'DragAndDrop' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReduxElectron' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReduxFetch' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReduxWebSocket' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxPages' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxSuperAgent' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ThirdParty/GoogleMaps' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ThirdParty/Radium' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'WindowEvents' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'WindowObject' + destPathCss));

  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'Buttons' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'DropDown' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'FormInputs' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'Gallery' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'List' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'ProgressBar' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'RangeSlider' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'Tooltip' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15c + 'TreeView' + destPathCss));
});

let defaultList = [
  'draganddrop',
  'gallery',
  'progressbar',
  'refluxpages',
  'treeview'
];

gulp.task('default', defaultList);
