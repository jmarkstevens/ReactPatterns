import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import {apiGetAppData, apiGetImageList, apiGetTreeView, apiGetInputData, apiGetPicList} from './api/api.Actions';

import appState from './app/app.Reducer';
import galleryState from './gallery/gallery.Reducer';
import inputState from './input/input.Reducer';
import treeState from './treeview/tree.Reducer';

const reducer = combineReducers({appState, galleryState, inputState, treeState});
let middleware = [thunkMiddleware];

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(apiGetAppData());
store.dispatch(apiGetImageList());
store.dispatch(apiGetTreeView());
store.dispatch(apiGetInputData());
store.dispatch(apiGetPicList());

export default store;
