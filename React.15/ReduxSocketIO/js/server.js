'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const ioServer = require('socket.io')(server);
const favicon = require('serve-favicon');

const path = require('path');
const port = Number(3500);

server.listen(port);

const socketCallBack = function(socket){ require('./mainsocket')(socket); };

ioServer.on('connection', socketCallBack);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
