'use strict';

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl.js';
import Actions from './flux/Actions';
import ApiStore from './flux/Api.Store';

window.ReactDom = ReactDom;

Actions.apiInit();

ReactDom.render( <AppCtrl />, document.getElementById('react') );
