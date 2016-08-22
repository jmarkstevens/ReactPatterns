'use strict';

const Emitter = require('primus-emitter');
const express = require('express');
const favicon = require('serve-favicon');

const path = require('path');
const port = Number(3500);

const Primus = require('primus');
const socketCallBack = function(socket){ require('./mainsocket')(socket); };

const app = express();
const server = app.listen(port);

const sio = new Primus(server, {transformer: 'websockets', parser: 'JSON'});
sio.use('emitter', Emitter);

const newPrimusOptions = false;
if (newPrimusOptions) {
	sio.library();
	sio.save('./ui-src/lib/primus/primus.js');
}

sio.on('connection', socketCallBack);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
