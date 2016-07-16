'use strict';

var getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Primus connection made.');

  var getDataDone = function(data){ socket.send('server:GotData', data); };
  var onGetData = function() { getSetData.getData(getDataDone); };
  socket.on('client:GetData', onGetData);

  var setDataDone = function(){ socket.send('server:SetDataDone'); };
  var onSetData = function(data) { getSetData.setData(data, setDataDone); };
  socket.on('client:SetData', onSetData);
};
