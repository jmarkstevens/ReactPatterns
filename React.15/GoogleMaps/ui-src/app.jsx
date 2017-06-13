'use strict';

import './index.html';
import './css/Draft.css';
import './css/index.css';
import './img/favicon.ico';

import React  from 'react';
import ReactDom  from 'react-dom';
import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

window.ReactDom = ReactDom;

ReactDom.render(<Provider store={AppStore}><AppCtrl /></Provider>, document.getElementById('react'));
