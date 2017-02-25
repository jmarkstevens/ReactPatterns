
import {apiSetInputData} from '../api/api.Actions';

const setData = (inputCopy) => { apiSetInputData(inputCopy); };

const onEditRecord = (inputCopy, field, value) => {
  switch (field) {
    case 'text': inputCopy.text = value; break;
    case 'checkbox': inputCopy.checkbox = value; break;
    case 'radioGroup': inputCopy.radioGroup = value; break;
    case 'color': inputCopy.color = value; break;
    case 'number': inputCopy.number = value; break;
    case 'range': inputCopy.range = value; break;
    case 'folder': inputCopy.folder = value; break;
  }
  setData(inputCopy);
  return inputCopy;
};

const initialState = {
  'text': '',
  'checkbox': false,
  'radioGroup': '',
  'color': '#ffffff',
  'number': '',
  'range': '',
  'folder': ''
};

export default function handleActions(state = initialState, action) {
  let inputCopy = Object.assign({}, state);
  switch (action.type) {
    case 'GetInputDataDone': return {...state, ...action.payload};
    case 'EditRecord': {
      let editRecordData = onEditRecord(inputCopy, action.field, action.value);
      return {...state, ...editRecordData};
    }
    default: return state;
  }
}
