'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const https = require('https');
const http = require('http');
const fs = require('fs');

const path = require('path');
const port = Number(process.env.REDUXFETCHPORT || 3500);

var options = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./certificate.pem')
};
const routes = require('./routes');

const app = express();
http.createServer(app).listen(port);
https.createServer(options, app).listen(3600);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('ui-dist'));
app.use('/routes', routes);

app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
