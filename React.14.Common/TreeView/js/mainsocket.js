'use strict';

var getSetData = require('./socket/getsetdata');

module.exports = function(socket) {
	console.log('Primus connection made.');

	var getAppStoreDone = function(data){ socket.send('server:GotAppStore', data); };
	var getGenusListDone = function(data){ socket.send('server:GotGenusList', data); };
	var getImageListDone = function(data){ socket.send('server:GotImageList', data); };
	var getTreeViewDone = function(data){ socket.send('server:GotTreeView', data); };
	var onGetData = function() { 
		getSetData.getAppStore(getAppStoreDone); 
		getSetData.getGenusList(getGenusListDone); 
		getSetData.getImageList(getImageListDone); 
		getSetData.getTreeView(getTreeViewDone); 
	};
	socket.on('client:GetData', onGetData);

	var onSetAppStoreData = function(data) { getSetData.setAppStore(data); };
	socket.on('client:SetAppStoreData', onSetAppStoreData);

	var onSetGenusList = function(data) { getSetData.setGenusList(data); };
	socket.on('client:SetGenusList', onSetGenusList);

	var onSetTreeView = function(data) { getSetData.setTreeView(data); };
	socket.on('client:SetTreeView', onSetTreeView);
};
