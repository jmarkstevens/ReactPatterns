import request from 'superagent';

import saActions from '../actions/sa.Actions';

module.exports = {
  getPicList() {
    request.get('/routes/getPicList').end((err, res) => { this.gotPicList(res.body); });
  },
  gotPicList(data) { saActions.gotPicList(data); },
};
