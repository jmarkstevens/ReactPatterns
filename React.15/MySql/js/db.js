'use strict';

var mysql      = require('mysql');
var poolConnection = mysql.createPool({
  connectionLimit : 100,
  host     : '192.168.0.124',
  user     : 'testuser',
  password : 'password',
  database : 'testdb1'
});

poolConnection.getConnection(function(err) {
  if (!err) console.log('The connection is active now');
});

function QueryResponse(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
}

poolConnection.query('SELECT 1 + 1 AS solution', QueryResponse);

process.on('SIGINT', function() {
  poolConnection.end(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});
