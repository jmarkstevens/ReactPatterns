'use strict';

var fs = require('fs');

var rootDataPath = './data';

var getData = function(doneCallBack) {
  var filePath = rootDataPath + '/basic.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var setData = function(data, doneCallBack) {
  var filePath = rootDataPath + '/basic.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    else doneCallBack();
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getData = getData;
module.exports.setData = setData;
