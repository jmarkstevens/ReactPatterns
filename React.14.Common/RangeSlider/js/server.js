'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var port = Number(3500);

var app = express();
var server = app.listen(port);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
