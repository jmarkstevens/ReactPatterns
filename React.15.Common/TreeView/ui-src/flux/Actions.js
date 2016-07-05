import Reflux from 'reflux';

let apiActions = [
  'apiInit',
  'apiInitDone',
  'apiSetAppStoreData',
  'apiTreeView'
]

let wsActions = [
  'gotAppStore',
  'gotImageList',
  'gotTreeView'
]

let treeActions = [
  'selectTreeNode',
  'setTreeNodeClosed',
  'treeActions',
  'saveTreeEdit',
  'saveTreeNew'
]

let actionArray = [...wsActions, ...apiActions, ...treeActions];
module.exports = Reflux.createActions(actionArray);
