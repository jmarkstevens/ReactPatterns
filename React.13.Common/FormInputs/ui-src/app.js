'use strict';

import React  from 'react';

import AppCtrl from './components/app.ctrl.js';
import ApiFct from './utils/ws.api.js';

window.React = React;

ApiFct.init();
ApiFct.getData();

React.render( <AppCtrl />, document.getElementById('react') );
