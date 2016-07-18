'use strict';

require("./index.html");
require("./css/index.css");
require("./img/favicon.ico");
// require("./img/1x1TransShim.gif");

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl.js';

window.ReactDom = ReactDom;

ReactDom.render( <AppCtrl />, document.getElementById('react') );
