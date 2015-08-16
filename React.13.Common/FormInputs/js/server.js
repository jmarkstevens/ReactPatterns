'use strict';

var Emitter = require('primus-emitter');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var Primus = require('primus');
var socketCallBack = function(socket){ require('./mainsocket.js')(socket); };
var port = Number(3500);

var app = express();
var server = app.listen(port);
var sio = new Primus(server, { transformer: 'websockets', parser: 'JSON' });
sio.use('emitter', Emitter);

var newPrimusOptions = false;
if (newPrimusOptions) {
	sio.library();
	sio.save('./ui-src/lib/primus/primus.js');
}

sio.on('connection', socketCallBack);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
