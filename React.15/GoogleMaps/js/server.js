'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const ioServer = require('socket.io')(server);

const fs = require('fs');

const path = require('path');
const port = Number(process.env.SINETPORT || 7500);

server.listen(port);

const socketCallBack = function(socket) {
  require('./apisocket')(socket);
  require('./litesocket')(socket);
};
ioServer.on('connection', socketCallBack);

const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));

const helmet = require('helmet');
app.use(helmet());

const rootDir = path.join(__dirname, '..', 'ui-dist');

app.use(express.static(rootDir));
app.get('/', function(req, res) {
  res.sendFile(rootDir + '/index.html');
});

const redirects = ['http://localhost:7500', 'http://test.sinet.com', 'http://portal.sinet.com'];
app.get('/\*', function(req, res) {
  res.redirect(301, redirects[2]);
});
