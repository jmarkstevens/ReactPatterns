import Actions from '../flux/Actions';

module.exports = {
	socket: {},
	init: function() {
		this.socket = new Primus();
		this.socket.on('server:GotData', this.gotData);
		Actions.apiInitDone();
	},
	getData: function() { this.socket.send('client:GetData', {}); },
	gotData: function(data) { Actions.gotData(data); Actions.gotData2(data); },
	setData: function(data) { this.socket.send('client:SetData', data); },
};
