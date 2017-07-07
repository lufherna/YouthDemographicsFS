// NPM dependencies
var express = require('express');
var router = express.Router();
// models they should be handling database queries
// call the route and call the query at the same time
// handlebars is under view
// from model to controller to view
var model = require('../models/model.js');

// create route. we need to redirect...always
router.get('/', function(req, res) {
	res.redirect('/index');
});

// index page renders all various items
router.get('/', function(req, res) {
	various.selectAll(function(data) {
		var randomObject = { various: data};
		res.render('index', randomObject);
	});
});

// create a new item
router.post('/create', function(req, res) {
	various.insertVarious(function() {
		res.redirect('/index')
	});
});

// update a new various item
router.post('/:id', function(req, res) {
	various.updateVarious(req.params.id, function() {
		res.redirect('/index')
	});
});

// export routes
module.exports = router;