'use strict';

let express = require('express');
let router = express.Router();
let sql = require('mssql');
let config = {
    user: 'testuser',
    password: 'password',
    server: '192.168.0.122',
    database: 'testdb1'
};

let poolConnection = new sql.Connection(config, function(err) {
  if (err) {
    console.log('The connection failed!');
    throw err;
  } else {
    let request = new sql.Request(poolConnection);
    request.query("CREATE TABLE dbo.basic (react_version nvarchar(50), project nvarchar(50), currentDateTime nvarchar(50))", function(err) {
      if (err) console.log('The CREATE TABLE query failed!');
    });
  }
});

process.on('SIGINT', function() {
  poolConnection.close(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});

let getSetData = require('./routes/getsetdata');

router.get('/getData', function(req, res) {
  let getDataDone = function(data){ res.send(data); };
  getSetData.getData(sql, poolConnection, getDataDone);
});

router.post('/setData', function(req, res) {
  let setDataDone = function(data){ res.send(data); };
  // console.log(req.body);
  getSetData.setData(req.body, sql, poolConnection, setDataDone);
});

module.exports = router;
