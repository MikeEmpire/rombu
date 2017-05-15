var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

// Import routes from controller to give server access
var index = require('./routes/html-routes.js');
var admin = require('./routes/admin-routes.js');

var port = process.env.PORT || 5000;

// Express
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: false	}));
// Method-override
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);
app.use('/admin', admin);

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});