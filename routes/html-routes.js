var express = require('express');
var router = express.Router();

var db = require("../models");
var index = require("../views/main/index.ejs");

router.get('/', function(req, res) {
  res.render('main/layouts/main.ejs', index);
});

router.get('/portfolio', function(req, res) {
	res.render('main/layouts/main.ejs', { title: 'Portfolio'	});
});

module.exports = router;
