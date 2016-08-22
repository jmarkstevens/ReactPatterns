'use strict';

const fs = require('fs');

const rootDataPath = './data';

const getData = function(event, doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(event, jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

const setData = function(data, event, doneCallBack) {
  const filePath = rootDataPath + '/basic.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    else doneCallBack(event);
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports = function(socket) {
  console.log('mainipc called.');

  const getDataDone = function(event, data){ event.sender.send('server:GotData', data); };
  const onGetData = function(event){ getData(event, getDataDone); };
  socket.on('client:GetData', onGetData);

  const setDataDone = function(event){ event.sender.send('server:SetDataDone'); };
  const onSetData = function(event, data){ setData(data, event, setDataDone); };
  socket.on('client:SetData', onSetData);
};
