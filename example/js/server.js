'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var port = Number(process.env.PORT || 3500);

var app = express();
var server = app.listen(port);

app.use('/', express.static('uidist'));
app.use(favicon(path.join(__dirname, '..', 'uidist', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
