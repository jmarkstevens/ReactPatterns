'use strict';

let express = require('express');
let router = express.Router();
let mysql      = require('mysql');

let poolConnection = mysql.createPool({
  connectionLimit : 100,
  host     : '192.168.0.124',
  user     : 'testuser',
  password : 'password',
  database : 'testdb1'
});

poolConnection.getConnection(function(err) {
  if (!err) console.log('The connection is active now');
});

process.on('SIGINT', function() {
  poolConnection.end(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});

let getSetData = require('./routes/getsetdata');

router.get('/getData', function(req, res) {
	let getDataDone = function(data){ res.send(data); };
	getSetData.getData(poolConnection, getDataDone);
});

router.post('/setData', function(req, res) {
	let setDataDone = function(data){ res.send(data); };
	console.log(req.body);
	getSetData.setData(req.body, poolConnection, setDataDone);
});

module.exports = router;
