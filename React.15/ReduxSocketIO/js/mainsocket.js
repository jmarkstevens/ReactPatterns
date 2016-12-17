'use strict';

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const getDataDone = function(data){
    console.log('getDataDone');
    socket.emit('server:GetDataDone', data);
  };
  const onGetData = function() {
    console.log('onGetData');
    getSetData.getData(getDataDone);
  };
  socket.on('client:GetData', onGetData);

  const setDataDone = function(){ socket.emit('server:SetDataDone'); };
  const onSetData = function(data) {
    getSetData.setData(data, setDataDone);
  };
  socket.on('client:SetData', onSetData);
};
