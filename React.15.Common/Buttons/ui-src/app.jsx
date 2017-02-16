'use strict';

import './index.html';
import './css/index.css';
import './img/sun.ico';
import './img/favicon.ico';
import './img/SLogoS5-48_C.png';

import React  from 'react';
import ReactDom  from 'react-dom';
import AppCtrl from './components/app.ctrl';

window.ReactDom = ReactDom;

ReactDom.render( <AppCtrl />, document.getElementById('react') );
