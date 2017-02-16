import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import appState from './app/app.Reducer';

const reducer = combineReducers({appState});
let middleware = [];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
