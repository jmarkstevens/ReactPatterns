'use strict';

import React  from 'react';

import AppCtrl from './components/app.ctrl.js';
import Actions from './flux/Actions';
import ApiStore from './flux/Api.Store';

window.React = React;

Actions.apiInit();

React.render( <AppCtrl />, document.getElementById('react') );
