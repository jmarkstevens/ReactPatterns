'use strict';

require('./index.html');
require('./css/index.css');
require('./img/favicon.ico');

import React  from 'react';
import ReactDom  from 'react-dom';

import AppCtrl from './components/app.ctrl';

window.ReactDom = ReactDom;

ReactDom.render( <AppCtrl />, document.getElementById('react') );
