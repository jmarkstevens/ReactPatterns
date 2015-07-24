'use strict';

var fs = require('fs');

var rootDataPath = './data';

var saveData = function(data) {
	var filePath = rootDataPath + '/basic.json';
	var writeFileCallBack = function (err) {
		if (err) console.log('error saving basic.json file ');
		console.log('basic.json saved');
	};
	fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

var createNewJson = function() {
	var treeView = {nodeid: '10', title: 'Dev', type: 'Dev', selected: true};
	saveData(treeView);
};

var start = function() {
	fs.exists(rootDataPath, function (exists) {
		if (!exists) fs.mkdir(rootDataPath);
		createNewJson();
	});
}();