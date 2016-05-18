'use strict';

import request from 'superagent';

import apiActions from '../actions/api.Actions';
import saActions from '../actions/sa.Actions';

module.exports = {
  getData() { request.get('/routes/getData').end((err, res) => { this.gotData(res.body); }); },
  gotData(data) { saActions.gotData1(data); saActions.gotData2(data); saActions.gotData3(data); },
  setData(data) { request.post('/routes/setData').send(data).end((err, res) => { apiActions.apiInitDone(); }); }
};
