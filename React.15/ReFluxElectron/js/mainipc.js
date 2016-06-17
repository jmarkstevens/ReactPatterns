'use strict';

var fs = require('fs');

var rootDataPath = './data';

var getData = function(event, doneCallBack) {
  var filePath = rootDataPath + '/basic.json';
  var jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      var jsonData = JSON.parse(data.toString());
      doneCallBack(event, jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

var setData = function(data) {
  var filePath = rootDataPath + '/basic.json';
  var writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports = function(socket) {
  console.log('mainipc called.');

  var getDataDone = function(event, data){ event.sender.send('server:GotData', data); };
  var onGetData = function(event){ getData(event, getDataDone); };
  socket.on('client:GetData', onGetData);

  var onSetData = function(event, data){ setData(data); };
  socket.on('client:SetData', onSetData);
};
