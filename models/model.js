var misc = require('../controllers/controller.js');
// console.log('this is connected to ' + router)
var misc1 = require('../server.js');
var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host	: "localhost",
	user	: "root",
	password: "root",
	database: "happines_levels"
}); // end of connection to mySQL database

// test the connection to the sql database
connection.connect(function(err) {
	if(err) {
		console.log('error connecting ' + err);
		return;
	}

	console.log('connected as id ' + connection.threadId);
}); // end of connection test 

// below was used to test out the connection 
// we now know that the connection is coming back with data
connection.query('SELECT * FROM 2017_happinesslevels', function(err, data) {
	if (err) {
		throw err
	}

	console.log('first test of the data: ', data);
})

// shows the sql data in object notation
app.get('/', function(req, res) {
	connection.query('SELECT * FROM 2017_happinesslevels;', function(err, data) {
		if (err) {
			throw err
		}
		 res.render('hapiness levels', { 2017_happinesslevels: data });
		}); // end of query connection
	});// end of API

// allows users to insert data into sql database
app.post('/', function(req, res) {
	connection.query('INSERT INTO `2017_happinesslevels` (Country, Happiness.Rank, Happiness.Score) VALUES (?, ?, ?)', 
		[req.body.Country, req.body.Happiness.Rank, req.body.Happiness.Score],
		function(err, result) {
			if (err) {
				throw err
			}
		res.redirect('/')
		};
	});

// allows user to delete 
app.delete('/:id', function(req, res) {
	connection.query('DELETE FROM `2017_happinesslevels` WHERE id = ?', [req.body.id],
		function(err, result) {
			if(err) {
				throw err;
			}

			res.redirect('/')
		});
	});

// allows users to update
app.post('/update', function(req, res) {
	connection.query('UPDATE `2017_happinesslevels` SET stats = ? WHERE id = ?', 
		[req.body.stats, req.body.id], function(err, result) {
			if(err) {
				throw(err)
			}

			res.redirect('/')
		})
	})