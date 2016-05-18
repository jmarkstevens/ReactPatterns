'use strict';

let getCB;
let setCB;

function getQueryResponse(err, rows) {
  if (err) {
    console.log('getQueryResponse error!!!');
    throw err;
  }
  else {
    getCB(rows[0]);
    console.log('getCB: ', rows[0]);
  }
}

function setQueryResponse(err) {
  if (err) console.log('setQueryResponse error!!!');
  console.log('setQueryResponse success!');
  setCB('ok');
}

function getData(sql, poolConnection, doneCallBack) {
  getCB = doneCallBack;
  let request = new sql.Request(poolConnection);
  request.query('SELECT TOP 1 * FROM dbo.basic ORDER BY currentDateTime DESC', getQueryResponse);
}

function setData(data, sql, poolConnection, doneCallBack) {
  setCB = doneCallBack;
  let request = new sql.Request(poolConnection);
  request
  .input('version', data.version)
  .input('project', data.project)
  .input('datetime', data.datetime)
  .query('INSERT INTO dbo.basic (react_version, project, currentDateTime) VALUES (@version, @project, @datetime)', setQueryResponse);
}

module.exports.getData = getData;
module.exports.setData = setData;
