'use strict';

require('./index.html');
require('./css/index.css');
require('./img/favicon.ico');

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl';
import Actions from './actions/api.Actions';
require('./stores/Api.Store');

window.ReactDom = ReactDom;

Actions.apiInit();

ReactDom.render( <AppCtrl />, document.getElementById('react') );
