import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import handleActions from './tree.Reducer'

const initialState = {
  nextID: 0,
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  showTreeEdit: false,
  showTreeNew: false,
  jumpList: [{}]
}

export default createStore(handleActions, initialState, applyMiddleware(thunkMiddleware));
