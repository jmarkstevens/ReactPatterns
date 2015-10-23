import request from 'superagent';

import Actions from '../flux/Actions';

let uri = 'http://localhost:3500';

module.exports = {
	getData() { request.get(uri + '/routes/getData').end((err, res) => { this.gotData(res.body); }); },
	gotData(data) { Actions.gotData1(data); Actions.gotData2(data); Actions.gotData3(data); },
	setData(data) { request.post('/routes/setData').send(data).end((err, res) => { Actions.apiInitDone(); }) },
};
