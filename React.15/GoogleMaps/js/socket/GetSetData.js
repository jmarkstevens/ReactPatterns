'use strict';

module.exports.getData = function(db, doneCallBack) {
  let selectCallBack = function(err, row) {
    if (err) console.log('Data readFile error ');
    else doneCallBack(row);
  };
  db.get('SELECT * FROM basic ORDER BY rowid DESC LIMIT 1', selectCallBack);
};

module.exports.setData = function(data, db, doneCallBack) {
  const newData = {
    $React_version: data.React_version,
    $Project: data.Project,
    $currentDateTime: data.currentDateTime
  };
  let insertCallBack = function(err) {
    if (err) console.log('Data insert error!');
    doneCallBack('ok');
  };
  let stmt = db.prepare(
    'INSERT INTO basic (React_version, Project, currentDateTime) VALUES($React_version, $Project, $currentDateTime)'
  );
  stmt.run(newData);
  stmt.finalize(insertCallBack);
};
