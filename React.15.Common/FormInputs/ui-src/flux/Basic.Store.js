import Reflux from 'reflux';

import Actions from './Actions';

let BasicStoreObject = {
  listenables: Actions,
  data: {
    'text': '',
    'checkbox': false,
    'radioGroup': '',
    'color': '',
    'number': '',
    'range': '',
    'folder': ''
  },
  onGotData(data) { this.data = data; BasicStore.trigger(); },
  onEditRecord(field, value) {
    let record = Object.assign({}, this.data);
    switch (field) {
      case 'text': record.text = value; break;
      case 'checkbox': record.checkbox = value; break;
      case 'radioGroup': record.radioGroup = value; break;
      case 'color': record.color = value; break;
      case 'number': record.number = value; break;
      case 'range': record.range = value; break;
      case 'folder': record.folder = value; break;
    }
    this.data = record;
    BasicStore.trigger();
    this.setData();
  },

  getData() { return this.data; },
  setData() { Actions.apiSetData(this.data); }
};
const BasicStore = Reflux.createStore(BasicStoreObject);
export default BasicStore;
