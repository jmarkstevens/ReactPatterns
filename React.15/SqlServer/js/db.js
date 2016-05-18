'use strict';

var sql = require('mssql');
var config = {
    user: 'testuser',
    password: 'password',
    server: '192.168.0.122',
    database: 'testdb1'
};

function QueryResponse(err, rows) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
}

var connection1 = new sql.Connection(config, function(err) {
  if (err) {
    console.log('The connection failed!');
    throw err;
  }
  else {
    var request = new sql.Request(connection1);
    request.query('SELECT 1 + 1 AS solution', QueryResponse);
  }
  connection1.close(function(err) {
    if (err) console.log('connection close error');
    else console.log('connection closed');
  });
});
