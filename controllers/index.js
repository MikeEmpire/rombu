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