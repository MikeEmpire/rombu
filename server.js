var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Import routes from controller to give server access
var index = require('./controllers/index.js');

var port = process.env.PORT || 5000;

// Express
var app = express();



// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: false	}));
// Method-override
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Serve static files
app.use(express.static('public'));




// SET EJS ENGINE HERE (ALSO REQUIRE EJS ABOV)




// Routes
app.use("/", routes);

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});