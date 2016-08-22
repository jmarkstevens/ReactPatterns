'use strict';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = Number(3500);

const app = express();
// var server = app.listen(port);

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: '/ui-dist/'}));
app.use(webpackHotMiddleware(compiler));

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
