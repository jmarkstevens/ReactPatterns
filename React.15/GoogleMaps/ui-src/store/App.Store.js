import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import startWs, {wsMiddleware} from './app/api.ws';

import appState from './app/app.Reducer';
import mapState from './map/map.Reducer';

const reducer = combineReducers({appState, mapState});
let middleware = [thunkMiddleware, wsMiddleware];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

startWs(store);

export default store;
