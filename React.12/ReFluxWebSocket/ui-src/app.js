'use strict';

var React  = require('react');
var AppCtrl = require('./components/app.ctrl.js');
var apiFct = require('./utils/ws.api.js');

window.React = React;

apiFct.init();
apiFct.getData();

React.render( <AppCtrl />, document.getElementById('react') );
