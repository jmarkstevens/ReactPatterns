import {createStore, applyMiddleware} from 'redux';
import startWs, {wsMiddleware} from './ws.api';

function handleData(state = {data1: {}}, action) {
  switch (action.type) {
    case 'ApiGotData': return Object.assign({}, state, {data1: action.data});
    default: return state;
  }
}

const store = createStore(handleData, applyMiddleware(wsMiddleware));

startWs(store);

export default store;
