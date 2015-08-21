import Actions from '../flux/Actions';

module.exports = {
	socket: {},
	init: function() {
		this.socket = new Primus();
		this.socket.on('server:GotAppStore', this.gotAppStore);
		this.socket.on('server:GotGenusList', this.gotGenusList);
		this.socket.on('server:GotImageList', this.gotImageList);
		this.socket.on('server:GotTreeView', this.gotTreeView);
		Actions.apiInitDone();
	},
	getData: function() { this.socket.send('client:GetData', {}); },

	gotAppStore: function(data) { Actions.gotAppStore(data); },
	gotGenusList: function(data) { Actions.gotGenusList(data); },
	gotImageList: function(data) { Actions.gotImageList(data); },
	gotTreeView: function(data) { Actions.gotTreeView(data); },

	setAppStoreData: function(data) { this.socket.send('client:SetAppStoreData', data); },
	setGenusList: function(data) { this.socket.send('client:SetGenusList', data); },
	setTreeView: function(data) { this.socket.send('client:SetTreeView', data); },
};
