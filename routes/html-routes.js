var express = require('express');

var router = express.Router();

// IMPORT MODELS HERE

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio', function(req, res) {
	res.send("Portfolio");
});


module.exports = router;

/*var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', { title: 'Express'	});
	});

	app.get('/portfolio', function(req, res) {
		res.render('index', { title: 'Portfolio'	});
	});

}*/