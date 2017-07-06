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
	database: "happiness_chart"
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
connection.query('SELECT * FROM happiness_stats', function(err, data) {
	if (err) {
		throw err
	}

	console.log('first test of the data: ', data);
})

// shows the sql data in object notation
// as of now the code below isn't working. getting a can't get error 
app.get('/', function(req, res) {
	connection.query('SELECT * FROM happiness_stats;', function(err, data) {
		if (err) {
			throw err
		}
		// res.render('random info', { happiness_stats: data});
		// not getting a response back, not sure why
		res.render( { happiness_stats: data})
	});
});

// allows users to insert data into sql database
/*app.post('/', function(req, res) {
	connection.query('INSERT INTO happiness_stats (stats) VALUES (?)', [req.body.stats],
		function(err, result) {
			if (err) {
				throw err
			}
			res.redirect('/')
		};
	});

// allows user to delete 
app.post('/delete', function(req, res) {
	connection.query('DELETE FROM stats WHERE id = ?', [req.body.id],
		function(err, result) {
			if(err) {
				throw err;
			}

			res.redirect('/')
		});
	});

// allows users to update
app.post('/update', function(req, res) {
	connection.query('UPDATE happiness_stats SET stats = ? WHERE id = ?', 
		[req.body.plan, req.body.id], function(err, result) {
			if(err) {
				throw(err)
			}

			res.redirect('/')
		})
	})*/