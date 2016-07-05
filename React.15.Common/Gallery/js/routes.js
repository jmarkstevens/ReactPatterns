'use strict';

let express = require('express');
let router = express.Router();

var getPicList = require('./routes/GetPicList');

router.get('/getPicList', function(req, res) {
	var gotPicList = function(data){ res.send(data); };
	getPicList.getPicList(gotPicList);
});

module.exports = router;
