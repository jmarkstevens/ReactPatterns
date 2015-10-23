'use strict';

let express = require('express');
let router = express.Router();

let getSetData = require('./socket/getsetdata');

router.get('/getData', function(req, res) {
	let getDataDone = function(data){ res.send(data); };
	getSetData.getData(getDataDone);
});

router.post('/setData', function(req, res) {
	let setDataDone = function(data){ res.send(data); };
	console.log(req.body);
	getSetData.setData(req.body, setDataDone);
});

module.exports = router;
