var express = require('express');
var router = express.Router();

var db = require("../models");

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio', function(req, res) {
	res.render('index', { title: 'Portfolio'	});
});

module.exports = router;
