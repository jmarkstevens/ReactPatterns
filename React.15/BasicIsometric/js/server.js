'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = Number(3500);

const app = express();
app.listen(port);

// require('node-jsx').install();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('babel-register')({presets:['es2015', 'react', 'stage-0']});
const AppInput = require('../ui-src/appiso');
// const ReactApp = AppCtrlInput.default;
const ReactApp = React.createFactory(AppInput.AppCtrl);
// console.log('ReactApp: ', ReactApp);

app.use('/', express.static('./'));
app.use(favicon(path.join(__dirname, '..', 'ui-src', 'img', 'favicon.ico')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  const reactHtml = ReactDOMServer.renderToString(ReactApp());
  // console.log('reactHtml: ', reactHtml);
  res.render('index.ejs', {reactOutput: reactHtml});
  // res.sendfile(__dirname + '/index.html', [], null);
});
