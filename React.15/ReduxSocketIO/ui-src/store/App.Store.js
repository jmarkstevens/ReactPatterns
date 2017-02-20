import {createStore, applyMiddleware} from 'redux';
import startWs, {wsMiddleware} from './ws.api';
import {apiSetData} from './Actions';

function handleData(state = {data1: {}}, action) {
  switch (action.type) {
    case 'ApiGotData': return Object.assign({}, state, {data1: action.data});
    default: return state;
  }
}

const store = createStore(handleData, applyMiddleware(wsMiddleware));

startWs(store);

const newData = {
  'React version': '15',
  'Project': 'Redux with socket.io',
  'currentDateTime': new Date().toLocaleString()
};

store.dispatch(apiSetData(newData));

export default store;
