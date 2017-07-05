// NPM Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// uses a static library
app.use(express.static(process.cwd() + '/public'));
app.use(express.static('public'));

// parse data
app.use(bodyParser.urlencoded({ extended: false}));

// handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// this file will be used for api routing
var router = require('./controllers/controller.js');

// start server
var port = process.env.PORT || 3008;
app.listen(port);
console.log('The magic is happening on port ' + port);

