'use strict';

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config')

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var port = Number(3500);

var app = express();
// var server = app.listen(port);

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: "/ui-dist/" }))
app.use(webpackHotMiddleware(compiler))

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
