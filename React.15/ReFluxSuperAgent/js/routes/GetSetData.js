'use strict';

const fs = require('fs');

const rootDataPath = './data';

const getData = function(doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

const setData = function(data, doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack('ok');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getData = getData;
module.exports.setData = setData;
