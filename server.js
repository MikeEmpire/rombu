var express = require('express');

var app = express();
var port = 5000;

app.use(express.static('public'));


app.get('/', function(req, res) {
	res.send("Home");
});

app.get('/portfolio', function(req, res) {
	res.send("Portfolio");
});

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});