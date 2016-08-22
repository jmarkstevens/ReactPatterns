'use strict';

const express = require('express');
const router = express.Router();

const getPicList = require('./routes/GetPicList');

router.get('/getPicList', function(req, res) {
  const gotPicList = function(data){ res.send(data); };
  getPicList.getPicList(gotPicList);
});

module.exports = router;
