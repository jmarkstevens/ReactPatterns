import Reflux from 'reflux';

var apiActions = [
	'apiInit',
	'apiInitDone',
	'apiSetAppStoreData',
	'apiSetGenusList',
	'apiTreeView'
]

var wsActions = [
	'gotAppStore',
	'gotGenusList',
	'gotImageList',
	'gotTreeView'
]

var treeActions = [
	'selectTreeNode',
	'setTreeNodeClosed',
	'treeActions',
	'saveTreeEdit',
	'saveTreeNew'
]

var genusActions = [
	'selectGenusNode',
	'setGenusNodeClosed'
]

var actionArray = wsActions.concat(apiActions, treeActions, genusActions);
module.exports = Reflux.createActions(actionArray);
