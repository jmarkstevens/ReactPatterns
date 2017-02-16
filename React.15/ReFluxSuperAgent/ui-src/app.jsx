'use strict';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl';
import Actions from './actions/api.Actions';
import './stores/Api.Store';

window.ReactDom = ReactDom;

Actions.apiInit();

ReactDom.render( <AppCtrl />, document.getElementById('react') );
