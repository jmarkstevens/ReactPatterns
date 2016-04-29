'use strict';

var fs = require('fs');
var _ld = require('lodash');

var getPicList = function(doneCallBack) {
  var picFolder = './ui-dist/data/_sm';

  var start = function() { fs.readdir(picFolder, getFileListCallBack); };

  var getFileListCallBack = function(err, fileList) {
    let lgPicFolder = '../data/_lg/';
    let smPicFolder = '../data/_sm/';
    if (err) console.log('getFileListCallBack error');
    else {
      var fileListReturned = _ld.filter(fileList, function(data) {
        var lowerName = data.toLowerCase();
        return (lowerName.endsWith('jpg'));
      });
      let returnList = [];
      let copyRight = 'Image © 2006 Chris Stevens';
      let addObject = {copyright: copyRight, lgFolder: lgPicFolder, smFolder: smPicFolder};
      fileListReturned.forEach(function(value){ returnList.push(Object.assign({file: value}, addObject)); });
      doneCallBack(returnList);
    }
  };
  start();
};

module.exports.getPicList = getPicList;
