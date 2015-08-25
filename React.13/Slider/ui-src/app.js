'use strict';

import React  from 'react';
import AppCtrl from './components/app.ctrl.js';

window.React = React;
React.initializeTouchEvents(true);

React.render( <AppCtrl />, document.getElementById('react') );
