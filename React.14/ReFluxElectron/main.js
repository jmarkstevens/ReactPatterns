var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');

var ipc = require('ipc');
require('./js/mainipc.js')(ipc);

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() { app.quit(); });

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	var windowStatePath = './windowstate.json';
	var windowState = {};
	if (false) mainWindow.openDevTools();
	var jsonReadCallBack = function(err, data){
		if (err) console.log('error opening windowstate');
		else {
			windowState = JSON.parse(data.toString());
			mainWindow.setSize(windowState.size[0], windowState.size[1]);
			mainWindow.setPosition(windowState.position[0], windowState.position[1]);
		}
	};
	fs.readFile(windowStatePath, jsonReadCallBack);

	mainWindow.loadUrl('file://' + __dirname + '/ui-dist/index.html');
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
