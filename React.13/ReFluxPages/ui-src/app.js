'use strict';

import React  from 'react';

import AppCtrl from './components/app.ctrl.js';

window.React = React;

React.render( <AppCtrl />, document.getElementById('react') );
