'use strict';

let gulp = require('gulp');
let config = require('./config.json');

let rootPath = config.macProjectRoot;
if (process.platform == 'win32') { rootPath = config.winProjectRoot; }

let patternsPath13 = rootPath + 'React.13/';
let patternsPath15 = rootPath + 'React.15/';
let patternsPath15c = rootPath + 'React.15.Common/';
let commonPath = '/ui-src/components/common/';

let destPath12 = rootPath + 'React.12/';
let destPath13 = rootPath + 'React.13/';
let destPath14 = rootPath + 'React.14/';
let destPath15 = rootPath + 'React.15/';
let destPath15c = rootPath + 'React.15.Common/';
let destPathDist = '/ui-dist';
let destPathCss = '/ui-src/css';
let destPathImg = '/ui-src/img';

let source = {
  leaficon: rootPath + 'Common/img/favicon.ico',
  transshim: rootPath + 'Common/img/1x1TransShim.gif',
};

let source15 = {
  jbutton: patternsPath15c + 'Buttons' + commonPath + 'jButton.js',
  jdropmenu: patternsPath15c + 'DropDown' + commonPath + 'jDropMenu.js',
  jdropselect: patternsPath15c + 'DropDown' + commonPath + 'jDropSelect.js',
  jinput: patternsPath15c + 'FormInputs' + commonPath + 'jInput.js',
  jlist: patternsPath15c + 'List' + commonPath + 'jList.js',
  jprogressbar: patternsPath15c + 'ProgressBar' + commonPath + 'jProgressBar.js',
  jrangeslider: patternsPath15c + 'RangeSlider' + commonPath + 'jRangeSlider.js',
  jtooltip: patternsPath15c + 'Tooltip' + commonPath + 'jTooltip.js',
  jtreeview: patternsPath15c + 'TreeView' + commonPath + 'jTreeView.js',
  jtreeviewb: patternsPath15c + 'TreeView' + commonPath + 'jTreeViewB.js',
  indexcss: patternsPath15 + 'Basic/ui-src/css/index.css'
};

let dest14 = {
  draganddrop: destPath15 + 'DragAndDrop' + commonPath,
  gallery: destPath15c + 'Gallery' + commonPath,
  progressbar: destPath15c + 'ProgressBar' + commonPath,
  refluxpages: destPath15 + 'ReFluxPages' + commonPath,
  rangeslider: destPath15c + 'RangeSlider' + commonPath,
  tooltip: destPath15c + 'Tooltip' + commonPath,
  treeview: destPath15c + 'TreeView' + commonPath
};

gulp.task('chromecast', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest14.chromecast));
  gulp.src(source15.jprogressbar).pipe(gulp.dest(dest14.chromecast));
});

gulp.task('draganddrop', function() {
  gulp.src(source15.jlist).pipe(gulp.dest(dest14.draganddrop));
});

gulp.task('gallery', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest14.gallery));
});

gulp.task('progressbar', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest14.progressbar));
});

gulp.task('rangeslider', function() {
  gulp.src(source15.jlist).pipe(gulp.dest(dest14.rangeslider));
});

gulp.task('refluxpages', function() {
  gulp.src(source15.jdropmenu).pipe(gulp.dest(dest14.refluxpages));
});

gulp.task('treeview', function() {
  gulp.src(source15.jbutton).pipe(gulp.dest(dest14.treeview));
  gulp.src(source15.jdropmenu).pipe(gulp.dest(dest14.treeview));
  gulp.src(source15.jinput).pipe(gulp.dest(dest14.treeview));
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
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath12 + 'Basic' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath12 + 'ReFluxWebSocket' + destPathCss));

  gulp.src(source15.indexcss).pipe(gulp.dest(destPath13 + 'Basic' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath13 + 'ReFluxWebSocket' + destPathCss));

  gulp.src(source15.indexcss).pipe(gulp.dest(destPath14 + 'Basic' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath14 + 'ReFluxSuperAgent' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath14 + 'ThirdParty/GoogleMaps' + destPathCss));

  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicHot' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicIsometric' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicJestTest' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'BasicUnitTest' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'DragAndDrop' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'MySql' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxElectron' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxPages' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxSuperAgent' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'ReFluxWebSocket' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'SQLite' + destPathCss));
  gulp.src(source15.indexcss).pipe(gulp.dest(destPath15 + 'SqlServer' + destPathCss));
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
  'rangeslider',
  'refluxpages',
  'treeview'
];

gulp.task('default', defaultList);
