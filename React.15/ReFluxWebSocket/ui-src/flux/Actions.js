import Reflux from 'reflux';

let apiActions = [
	'apiInit',
	'apiInitDone',
	'apiSetData'
]

let wsActions = [
	'gotData1',
	'gotData2',
	'gotData3'
]

let actionArray = [...apiActions, ...wsActions];
module.exports = Reflux.createActions(actionArray);
