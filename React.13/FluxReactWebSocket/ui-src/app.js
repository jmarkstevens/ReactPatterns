'use strict';

import React  from 'react';

import Actions from './flux/Actions';
import ApiStore from './flux/Api.Store';

import AppCtrl from './components/app.ctrl.js';

window.React = React;

Actions.apiInit();
Actions.apiGetData();

React.render( <AppCtrl />, document.getElementById('react') );
