import request from 'superagent';

import Actions from '../flux/Actions';

module.exports = {
  getData() { request.get('/routes/getData').end((err, res) => { this.gotData(res.body); }); },
  gotData(data) { Actions.gotData(data); },
  setData(data) { request.post('/routes/setData').send(data).end(); },
};
