'use strict';

let express = require('express');
let router = express.Router();
let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./data/mydb.db');

db.run("CREATE TABLE if not exists basic (react_version TEXT, project TEXT, currentDateTime TEXT)");

process.on('SIGINT', function() {
  db.close(function(err) {
    console.log('The connection is terminated now');
    process.exit(0);
  });
});

let getSetData = require('./routes/getsetdata');

router.get('/getData', function(req, res) {
  let getDataDone = function(data){ res.send(data); };
  getSetData.getData(db, getDataDone);
});

router.post('/setData', function(req, res) {
  let setDataDone = function(data){ res.send(data); };
  // console.log(req.body);
  getSetData.setData(req.body, db, setDataDone);
});

module.exports = router;
