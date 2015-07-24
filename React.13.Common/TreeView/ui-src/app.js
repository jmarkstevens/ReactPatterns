'use strict';

import React  from 'react';

import ApiFct from './utils/ws.api.js';
import AppCtrl from './components/app.ctrl.js';

window.React = React;

ApiFct.init();
ApiFct.getData();

React.render( <AppCtrl />, document.getElementById('react') );
