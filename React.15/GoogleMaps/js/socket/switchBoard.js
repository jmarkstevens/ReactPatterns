'use strict';

const https = require('https');

const username = 'mstevens@merlincsi.com';
const password = 'sinet123$dev';
const host = '68.15.17.244';
const apiKey = '989bed52-71bc-4a83-ae12-827b476f61b6';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

function apiRequest(apiPath, doneCallBack) {
  var options = {
    host: host,
    port: 443,
    path: apiPath,

    headers: {
      'Connection': 'keep-alive',
      'Authorization':'Basic ' + new Buffer(username + ':' + password).toString('base64'),
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.8'
    }
  };

  let request = https.get(options, function(res) {
    var body = '';
    res.on('data', function(data) {
      body += data;
    });
    res.on('end', function() {
      doneCallBack(JSON.parse(body));
    });
    res.on('error', function(e) {
      console.log('Got error: ' + e.message);
    });
  });
}

module.exports.loginTest = function(data, doneCallBack) {
  apiRequest(`/manage/commands/commands.access.admin.loginTest/?api_key=${apiKey}&name=${data.email}&password=${data.passw}`, doneCallBack);
};
