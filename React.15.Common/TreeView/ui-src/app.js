'use strict';

require("./index.html");
require("./css/index.css");
require("./img/favicon.ico");
require("./img/sun.ico");
require("./img/leaf.ico");
require("./img/snow.ico");

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl.js';
import Actions from './flux/Actions';
import ApiStore from './flux/Api.Store';

window.ReactDom = ReactDom;

Actions.apiInit();

ReactDom.render( <AppCtrl />, document.getElementById('react') );
