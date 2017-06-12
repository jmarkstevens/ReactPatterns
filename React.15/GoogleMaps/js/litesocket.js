'use strict';

let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./data/lite.db');

db.run("CREATE TABLE if not exists basic (React_version TEXT, Project TEXT, currentDateTime TEXT)");

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const getDataDone = function(data){
    console.log('getDataDone');
    socket.emit('server:GetDataDone', data);
  };
  const onGetData = function() {
    console.log('onGetData');
    getSetData.getData(db, getDataDone);
  };
  socket.on('client:GetData', onGetData);

  const setDataDone = function(){ socket.emit('server:SetDataDone'); };
  const onSetData = function(data) {
    getSetData.setData(data, db, setDataDone);
  };
  socket.on('client:SetData', onSetData);
};

process.on('SIGINT', function() {
  db.close(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});
