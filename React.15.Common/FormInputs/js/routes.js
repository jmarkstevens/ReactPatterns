'use strict';

let express = require('express');
let router = express.Router();

let getSetData = require('./routes/getsetdata');

router.get('/getData', function(req, res) {
	let getDataDone = function(data){ res.send(data); };
	getSetData.getData(getDataDone);
});

router.post('/setData', function(req, res) {
	getSetData.setData(req.body);
});

module.exports = router;
