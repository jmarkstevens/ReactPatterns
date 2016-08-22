'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = Number(process.env.RANGESLIDERPORT || 3500);

const app = express();
app.listen(port);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
