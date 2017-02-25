'use strict';

import './index.html';
import './css/index.css';
import './css/rangeInput.css';

import './img/favicon.ico';
import './img/sun.ico';
import './img/leaf.ico';
import './img/snow.ico';
import './img/1x1TransShim.gif';
import './img/SLogoS5-48_C.png';

import React  from 'react';
import ReactDom  from 'react-dom';
import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

window.ReactDom = ReactDom;

ReactDom.render(<Provider store={AppStore}><AppCtrl /></Provider>, document.getElementById('react'));
