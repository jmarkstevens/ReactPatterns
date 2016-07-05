'use strict';

let bodyParser = require('body-parser');
let express = require('express');
let favicon = require('serve-favicon');

let path = require('path');
let port = Number(process.env.REFLUXSAPORT || 3500);

let routes = require('./routes');

let app = express();
let server = app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('ui-dist'));
app.use('/routes', routes);

app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
