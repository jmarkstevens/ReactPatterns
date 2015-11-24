import Actions from '../flux/Actions';

module.exports = {
	init: function() {
		ipc.on('server:GotData', this.gotData);
		Actions.apiInitDone();
	},
	getData: function() { ipc.send('client:GetData', {}); },
	gotData: function(event, data) { Actions.gotData(data); },
	setData: function(data) { ipc.send('client:SetData', data); },
};
