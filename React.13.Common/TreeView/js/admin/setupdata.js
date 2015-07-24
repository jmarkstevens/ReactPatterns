'use strict';

var fs = require('fs');

var rootDataPath = './data';

var saveTreeData = function(data) {
	var filePath = rootDataPath + '/TreeView.json';
	var writeFileCallBack = function (err) {
		if (err) console.log('error saving TreeView.json file ');
		console.log('TreeView.json saved');
	};
	fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

var saveSnipsData = function(data) {
	var filePath = rootDataPath + '/Snips.json';
	var writeFileCallBack = function (err) {
		if (err) console.log('error saving Snips.json file ');
		console.log('Snips.json saved');
	};
	fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

var createNewJson = function() {
	var treeView = [{nodeid: '10', title: 'Dev', type: 'Dev', selected: true, children: []}];
	var snips = [{nodeid: '001', nextid: 11},{nodeid: '10', snips: [{comment: 'comment', snip: 'snip'}]}];
	saveTreeData(treeView);
	saveSnipsData(snips);
};

var start = function() {
	fs.exists(rootDataPath, function (exists) {
		if (!exists) fs.mkdir(rootDataPath);
		createNewJson();
	});
}();