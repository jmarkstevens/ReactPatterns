import Reflux from 'reflux';

var Actions = exports;

Actions.gotAppStore = Reflux.createAction();
Actions.gotGenusList = Reflux.createAction();
Actions.gotImageList = Reflux.createAction();
Actions.gotTreeView = Reflux.createAction();

Actions.selectTreeNode = Reflux.createAction();
Actions.setTreeNodeClosed = Reflux.createAction();
Actions.treeActions = Reflux.createAction();
Actions.saveTreeEdit = Reflux.createAction();
Actions.saveTreeNew = Reflux.createAction();

Actions.selectGenusNode = Reflux.createAction();
Actions.setGenusNodeClosed = Reflux.createAction();

Actions.selectGenus = Reflux.createAction();
Actions.selectSpecie = Reflux.createAction();
Actions.selectPart = Reflux.createAction();

Actions.selectJumpNode = Reflux.createAction();
