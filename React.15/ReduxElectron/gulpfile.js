'use strict';

let gulp = require('gulp');
let shell = require('gulp-shell');
let config = require('./config.json');

let shellTaskArgument;
if (process.platform == 'win32') shellTaskArgument = config.winProjectRoot + '/node_modules/electron-prebuilt/dist/electron.exe ' + config.winProjectRoot;
else shellTaskArgument = './node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron ./../ReduxElectron';

gulp.task('default', shell.task([shellTaskArgument]));
