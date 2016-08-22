'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');

const path = require('path');
const port = Number(process.env.GALLERYPORT || 3500);

const routes = require('./routes');

const app = express();
app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('ui-dist'));
app.use('/routes', routes);

app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
