'use strict';

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Primus connection made.');

  const getDataDone = function(data){ socket.send('server:GotData', data); };
  const onGetData = function() { getSetData.getData(getDataDone); };
  socket.on('client:GetData', onGetData);

  const setDataDone = function(){ socket.send('server:SetDataDone'); };
  const onSetData = function(data) { getSetData.setData(data, setDataDone); };
  socket.on('client:SetData', onSetData);
};
