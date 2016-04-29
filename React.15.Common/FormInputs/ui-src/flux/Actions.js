import Reflux from 'reflux';

var apiActions = [
	'apiInit',
	'apiInitDone',
	'apiSetData'
]

var wsActions = ['gotData']
var inputActions = ['editRecord']

var actionArray = [...wsActions, ...apiActions, ...inputActions];
module.exports = Reflux.createActions(actionArray);
