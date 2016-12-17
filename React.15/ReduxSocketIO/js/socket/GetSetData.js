'use strict';

const fs = require('fs');

const rootDataPath = './data';

module.exports.getData = function(doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setData = function(data, doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    else doneCallBack();
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};
