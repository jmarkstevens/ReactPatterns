import Reflux from 'reflux';

let saActions = [
	'gotData1',
	'gotData2',
	'gotData3'
]

module.exports = Reflux.createActions(saActions);
