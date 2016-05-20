'use strict';

let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
let port = Number(3500);

let app = express();
app.listen(port);

// require("node-jsx").install();
var React = require('react');
let ReactDOMServer = require('react-dom/server');
require("babel-register")({presets:[ 'es2015', 'react', 'stage-0' ]});
let AppInput = require('../ui-src/appiso');
// const ReactApp = AppCtrlInput.default;
let ReactApp = React.createFactory(AppInput.AppCtrl);
// console.log('ReactApp: ', ReactApp);

app.use('/', express.static('./'));
app.use(favicon(path.join(__dirname, '..', 'ui-src', 'img', 'favicon.ico')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var reactHtml = ReactDOMServer.renderToString(ReactApp());
  // console.log('reactHtml: ', reactHtml);
  res.render('index.ejs', {reactOutput: reactHtml});
  // res.sendfile(__dirname + '/index.html', [], null);
});
