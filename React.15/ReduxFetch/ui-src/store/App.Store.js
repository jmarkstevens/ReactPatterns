import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {apiSetData} from './api.Actions';

function handleData(state = {data1: {}}, action) {
  switch (action.type) {
    case 'GOT_DATA': return Object.assign({}, state, {data1: action.payload});
    default: return state;
  }
}

const store = createStore(handleData, applyMiddleware(thunkMiddleware));

const newData = {
  'React version': '15',
  'Project': 'Redux with fetch polyfill',
  'currentDateTime': new Date().toLocaleString()
};

store.dispatch(apiSetData(newData));

export default store;
