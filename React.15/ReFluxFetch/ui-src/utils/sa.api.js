import 'whatwg-fetch';

import apiActions from '../actions/api.Actions';
import saActions from '../actions/sa.Actions';

let jsonHeader = {'Accept': 'application/json', 'Content-Type': 'application/json'};

module.exports = {
  getData() { fetch('/routes/getData').then((response) => { return response.json(); }).then((json) => { this.gotData(json); }); },
  gotData(data) { saActions.gotData1(data); saActions.gotData2(data); saActions.gotData3(data); console.log('gotData json: ', data); },
  setData(data) { fetch('/routes/setData', {method: 'POST', headers: jsonHeader, body: JSON.stringify(data)})
    .then((response) => { apiActions.apiInitDone(); })
  }
};
