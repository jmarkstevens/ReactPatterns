var Actions = require('../flux/Actions');

module.exports = {
	socket: {},
	init: function() { 
		this.socket = new Primus('http://192.168.0.100:3500') 
		this.socket.on('server:GotData', this.gotData);
	},
	getData: function() { this.socket.send('client:GetData', {}); },
	gotData: function(data) { Actions.gotData(data); },
	setData: function(data) { this.socket.send('client:SetData', data); },
};