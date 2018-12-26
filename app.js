var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes')
var app = express();

// Database Connection
var db = 'mongodb://mydb:hacking24@ds245082.mlab.com:45082/anupam';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Redirect
app.use('/', routes);

//create server
var port = 8081;
app.listen(port, function(){

	console.log('app listening on port' + port);
});