'use strict';

require('./index.html');
require('./css/index.css');
require('./img/favicon.ico');
require('./img/sun.ico');
require('./img/leaf.ico');
require('./img/snow.ico');

import 'babel-polyfill';
import React  from 'react';
import ReactDom  from 'react-dom';
import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

window.ReactDom = ReactDom;

ReactDom.render(
  <Provider store={AppStore}><AppCtrl /></Provider>,
  document.getElementById('react')
);
