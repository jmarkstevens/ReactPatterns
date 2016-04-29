'use strict';

require("./index.html");
require("./css/index.css");
require("./img/sun.ico");
require("./img/favicon.ico");
require("./img/SLogoS5-48_C.png");

import React  from 'react';
import ReactDom  from 'react-dom';
import AppCtrl from './components/app.ctrl.js';

window.ReactDom = ReactDom;

ReactDom.render( <AppCtrl />, document.getElementById('react') );
