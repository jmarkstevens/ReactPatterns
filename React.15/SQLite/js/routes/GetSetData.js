'use strict';

function getData(db, doneCallBack) {
  let jsonReadCallBack = function(err, row){
    if (err) console.log('Data readFile error ');
    else {
      // console.log('Data select ok: ', row);
      doneCallBack(row);
    }
  };
  db.get('SELECT * FROM basic ORDER BY rowid DESC LIMIT 1', jsonReadCallBack);
}

function setData(data, db, doneCallBack) {
  let writeFileCallBack = function (err) {
    if (err) console.log('Data insert error!');
    doneCallBack('ok');
  };
  var stmt = db.prepare('INSERT INTO basic VALUES ($react_version, $project, $currentDateTime)');
  stmt.run(data);
  stmt.finalize(writeFileCallBack);
}

module.exports.getData = getData;
module.exports.setData = setData;
