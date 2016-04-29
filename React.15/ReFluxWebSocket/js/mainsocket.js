'use strict';

var getSetData = require('./socket/getsetdata');

module.exports = function(socket) {
	console.log('Primus connection made.');

	var getDataDone = function(data){ socket.send('server:GotData', data); };
	var onGetData = function() { getSetData.getData(getDataDone); };
	socket.on('client:GetData', onGetData);

	var onSetData = function(data) { getSetData.setData(data); };
	socket.on('client:SetData', onSetData);
};
