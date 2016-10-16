import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {apiGetAppData, apiGetImageList, apiGetTreeView} from './api.Actions';

import handleActions from './tree.Reducer';

const initialState = {
  nextID: 0,
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  showTreeEdit: false,
  showTreeNew: false,
  jumpList: [{}]
};

const store = createStore(handleActions, initialState, applyMiddleware(thunkMiddleware));

store.dispatch(apiGetAppData());
store.dispatch(apiGetImageList());
store.dispatch(apiGetTreeView());

export default store;
