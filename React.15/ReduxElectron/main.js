'use strict';

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
var fs = require('fs');

const useDevTools = 0;

const {ipcMain} = electron;
require('./js/mainipc')(ipcMain);

var mainWindow = null;

app.on('window-all-closed', function() { app.quit(); });

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  var windowStatePath = './windowstate.json';
  var windowState = {};
  if (useDevTools) mainWindow.openDevTools();
  var jsonReadCallBack = function(err, data){
    if (err) console.log('error opening windowstate');
    else {
      windowState = JSON.parse(data.toString());
      mainWindow.setSize(windowState.size[0], windowState.size[1]);
      mainWindow.setPosition(windowState.position[0], windowState.position[1]);
    }
  };
  fs.readFile(windowStatePath, jsonReadCallBack);

  mainWindow.loadURL('file://' + __dirname + '/ui-dist/index.html');
  mainWindow.on('close', function() {
    windowState.size = mainWindow.getSize();
    windowState.position = mainWindow.getPosition();
    var writeFileCallBack = function (err) {
      if (err) console.log('error saving windowstate.json file ');
      mainWindow = null;
    };
    fs.writeFile(windowStatePath, JSON.stringify(windowState, null, 2), writeFileCallBack);
  });
});
