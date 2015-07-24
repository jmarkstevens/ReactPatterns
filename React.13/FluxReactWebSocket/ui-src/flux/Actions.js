import flux from 'flux-react';

var apiActions = [
	'apiInit',
	'apiGetData',
	'apiSetData'
]

var wsActions = [
	'gotData',
	'gotData2'
]

var actionArray = wsActions.concat(apiActions);
module.exports = flux.createActions(actionArray);