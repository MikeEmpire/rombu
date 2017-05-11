var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Import routes from controller to give server access
var routes = require('./controllers/rombu_controller.js');

var port = process.env.PORT || 5000;

// Express
var app = express();

// Serve static files
app.use(express.static(process.cwd() + '/public'));

// Body-parser
app.use(bodyParser.urlencoded({	extended: false	}));

// Method-override
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// SET EJS ENGINE HERE (ALSO REQUIRE EJS ABOVE)




// Routes
app.use("/", routes);

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});