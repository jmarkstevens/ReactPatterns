'use strict';

const fs = require('fs');

const rootDataPath = './data';

module.exports.getAppData = function(doneCallBack) {
  const filePath = rootDataPath + '/AppData.json';
  const jsonReadCallBack = function(err, data){
    if (err) console.log('AppData readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setAppData = function(data) {
  const filePath = rootDataPath + '/AppData.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving AppData.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getImageList = function(doneCallBack) {
  const filePath = rootDataPath + '/ImageList.json';
  const jsonReadCallBack = function(err, data){
    if (err) console.log('ImageList readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.getTreeView = function(doneCallBack) {
  const filePath = rootDataPath + '/TreeView.json';
  const jsonReadCallBack = function(err, data){
    if (err) console.log('TreeView readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setTreeView = function(data) {
  const filePath = rootDataPath + '/TreeView.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving TreeView.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack);
};
