var express = require('express');
var router = express.Router();

var db = require("../models");
var index = require("../views/main/index.handlebars");

var home = {
	 title: 'Welcome to Rombu!',
	};
var about = {
   title: 'Rombu: Portfolio',
  };
var contact = {
   title: 'Contact Rombu!',
  };

// Home
router.get('/', function(req, res) {
  res.render('main/index', home);
});

// Portfolio
router.get('/about', function(req, res) {
	db.Video.findAll({})
    .then(function(results) {
    	res.locals.video = results;
      // for (var i=0; i<res.locals.video.length; i++) {
      //   res.locals.video[i].url = $.parseHTML(res.locals.video[i].url);
      // }
      console.log(res.locals.video[0].url);
      res.render('main/about', about);
    });
});

// Contact
router.get('/contact', function(req, res) {
  res.render('main/contact', contact);
});

module.exports = router;
