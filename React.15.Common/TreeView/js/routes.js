'use strict';

let express = require('express');
let router = express.Router();

let getSetData = require('./routes/getsetdata');

router.get('/getAppData', function(req, res) {
  let getDataDone = function(data){ res.send(data); };
  getSetData.getAppData(getDataDone);
});

router.get('/getImageList', function(req, res) {
  let getDataDone = function(data){ res.send(data); };
  getSetData.getImageList(getDataDone);
});

router.get('/getTreeView', function(req, res) {
  let getDataDone = function(data){ res.send(data); };
  getSetData.getTreeView(getDataDone);
});

router.post('/setAppData', function(req, res) { getSetData.setAppData(req.body); });
router.post('/setTreeView', function(req, res) { getSetData.setTreeView(req.body); });

module.exports = router;
