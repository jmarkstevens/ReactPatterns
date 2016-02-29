import Reflux from 'reflux';

var apiActions = [
	'apiInit',
	'apiInitDone',
	'apiSetData'
]

var wsActions = [
	'gotData',
	'gotData2'
]

var actionArray = wsActions.concat(apiActions);
module.exports = Reflux.createActions(actionArray);
