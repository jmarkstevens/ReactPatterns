import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

function handleData(state = {data1: {}}, action) {
  switch (action.type) {
    case 'GOT_DATA': return Object.assign({}, state, {data1: action.payload});
    default: return state;
  }
}

export default createStore(handleData, applyMiddleware(thunkMiddleware));
