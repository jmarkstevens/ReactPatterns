'use strict';

var fs = require('fs');

var rootDataPath = './data';

var getAppStore = function(doneCallBack) {
  var filePath = rootDataPath + '/App.Store.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('AppStore readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var setAppStore = function(data) {
  var filePath = rootDataPath + '/App.Store.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving App.Store.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

var getImageList = function(doneCallBack) {
  var filePath = rootDataPath + '/imagelist.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('ImageList readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var getTreeView = function(doneCallBack) {
  var filePath = rootDataPath + '/treeview.json';
  var jsonReadCallBack = function(err, data){
    if (err) console.log('TreeView readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var setTreeView = function(data) {
  var filePath = rootDataPath + '/treeview.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving TreeView.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getAppStore = getAppStore;
module.exports.setAppStore = setAppStore;
module.exports.getImageList = getImageList;
module.exports.getTreeView = getTreeView;
module.exports.setTreeView = setTreeView;
