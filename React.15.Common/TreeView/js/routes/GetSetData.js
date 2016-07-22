'use strict';

var fs = require('fs');

var rootDataPath = './data';

module.exports.getAppData = function(doneCallBack) {
  var filePath = rootDataPath + '/AppData.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('AppData readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setAppData = function(data) {
  var filePath = rootDataPath + '/AppData.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving AppData.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getImageList = function(doneCallBack) {
  var filePath = rootDataPath + '/Imagelist.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('ImageList readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.getTreeView = function(doneCallBack) {
  var filePath = rootDataPath + '/TreeView.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('TreeView readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setTreeView = function(data) {
  var filePath = rootDataPath + '/TreeView.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving TreeView.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack);
};
