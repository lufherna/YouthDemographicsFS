// NPM dependencies
var express = require('express');
var router = express.Router();
// what is the plan with the model.js?
var various = require('../models/model.js');

// create route. we need to redirect...always
router.get('/', function(req, res) {
	res.redirect('/index');
});

// index page renders all various items
router.get('/index', function(req, res) {
	various.selectAll(function(data) {
		var randomObject = { various: data};
		res.render('index', randomObject);
	});
});

// create a new item
router.post('/various/create', function(req, res) {
	various.insertVarious(req.body.various_name, function() {
		res.redirect('/index')
	});
});

// update a new various item
router.post('/various/update', function(req, res) {
	various.updateVarious(req.params.id, function() {
		res.redirect('/index')
	});
});

// export routes
module.exports = router;