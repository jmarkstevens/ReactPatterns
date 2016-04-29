import Actions from '../flux/Actions';

module.exports = {
  socket: {},
  init() {
    this.socket = new Primus();
    this.socket.on('server:GotData', this.gotData);
    Actions.apiInitDone();
  },
  getData() { this.socket.send('client:GetData', {}); },
  gotData(data) { Actions.gotData1(data); Actions.gotData2(data); Actions.gotData3(data); },
  setData(data) { this.socket.send('client:SetData', data); },
};
