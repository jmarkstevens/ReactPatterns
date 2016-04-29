import request from 'superagent';

import apiActions from '../actions/api.Actions';
import saActions from '../actions/sa.Actions';

module.exports = {
  getPicList() {
    request.get('/routes/getPicList').end((err, res) => { this.gotPicList(res.body); });
  },
  gotPicList(data) { saActions.gotPicList(data); },
};
