var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

// Import routes from controller to give server access
/*var index = require('./routes/html-routes.js');
var admin = require('./routes/admin-routes.js');*/

// Express
var app = express();
var port = process.env.PORT || 5000;

var db = require('./models');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: false	}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Method-override - Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
/*app.use('/', index);
app.use('/admin', admin);*/

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

db.sequelize.sync().then(function() {
	app.listen(port, function(err) {
		console.log('Listening on port ' + port);
	});
});