'use strict';

var fs = require('fs');

var rootDataPath = './data';

var getAppStore = function(doneCallBack) {
  var filePath = rootDataPath + '/App.Store.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('AppStore readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var getGenusList = function(doneCallBack) {
  // var filePath = rootDataPath + '/GenusList.json';
  // var filePath = rootDataPath + '/palmlistC.json';
  var filePath = rootDataPath + '/dirlist.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('GenusList readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var getImageList = function(doneCallBack) {
  var filePath = rootDataPath + '/ImageList.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('ImageList readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var getTreeView = function(doneCallBack) {
  var filePath = rootDataPath + '/TreeView.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('TreeView readFile error ' + filePath);
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

var setGenusList = function(data) {
  var filePath = rootDataPath + '/GenusList.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving GenusList.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

var setTreeView = function(data) {
  var filePath = rootDataPath + '/TreeView.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving TreeView.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getAppStore = getAppStore;
module.exports.getGenusList = getGenusList;
module.exports.getImageList = getImageList;
module.exports.getTreeView = getTreeView;
module.exports.setAppStore = setAppStore;
module.exports.setGenusList = setGenusList;
module.exports.setTreeView = setTreeView;
