'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');

router.get('/getAppData', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getAppData(getDataDone);
});

router.get('/getImageList', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getImageList(getDataDone);
});

router.get('/getTreeView', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getTreeView(getDataDone);
});

router.post('/setAppData', function(req) { getSetData.setAppData(req.body); });
router.post('/setTreeView', function(req) { getSetData.setTreeView(req.body); });

module.exports = router;
