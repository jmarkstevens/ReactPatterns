'use strict';

import React  from 'react';
import ReactDom  from 'react-dom';
import AppCtrl from './components/app.ctrl.js';

window.ReactDom = ReactDom;

ReactDom.render( <AppCtrl />, document.getElementById('react') );
