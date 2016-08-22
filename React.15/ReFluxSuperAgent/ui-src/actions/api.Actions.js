import Reflux from 'reflux';

let apiActions = [
  'apiInit',
  'apiInitDone',
  'apiSetData'
];

module.exports = Reflux.createActions(apiActions);
