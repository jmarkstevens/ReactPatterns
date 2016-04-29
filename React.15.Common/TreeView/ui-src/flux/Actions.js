import Reflux from 'reflux';

let apiActions = [
	'apiInit',
	'apiInitDone',
	'apiSetAppStoreData',
	'apiSetGenusList',
	'apiTreeView'
]

let wsActions = [
	'gotAppStore',
	'gotGenusList',
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

let genusActions = [
	'selectGenusNode',
	'setGenusNodeClosed'
]

let actionArray = [...wsActions, ...apiActions, ...treeActions, ...genusActions];
module.exports = Reflux.createActions(actionArray);
