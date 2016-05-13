'use strict';

function getData(poolConnection, doneCallBack) {
  var jsonReadCallBack = function(err, rows, fields){
    if (err) doneCallBack('Data readFile error ');
    else {
      doneCallBack(rows);
    }
  };
  poolConnection.query('SELECT * FROM basic ORDER BY pk DESC LIMIT 1', jsonReadCallBack);
}

function setData(data, poolConnection, doneCallBack) {
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack('ok');
  };
  poolConnection.query('INSERT INTO basic SET ?', data, writeFileCallBack);
}

module.exports.getData = getData;
module.exports.setData = setData;
