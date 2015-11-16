'use strict';

var React  = require('react');
var AppCtrl = require('./components/app.ctrl.js');

window.React = React;

React.render( <AppCtrl />, document.getElementById('react') );
