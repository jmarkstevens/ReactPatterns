'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);

const fs = require('fs');

const path = require('path');
const port = Number(process.env.GOOGLEMAPSPORT || 3500);

server.listen(port);

const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));

const rootDir = path.join(__dirname, '..', 'ui-dist');

app.use(express.static(rootDir));
app.get('/', function(req, res) {
  res.sendFile(rootDir + '/index.html');
});
