var express = require('express');
var router = express.Router();

var db = require("../models");
var index = require("../views/main/index.handlebars");

var home = {
	 title: 'Welcome to Rombu!',
	};
var portfolio = {
   title: 'Portfolio for Rombu',
	 addCSS: "<link rel='stylesheet' href='/assets/main/css/portfolio.css'",
	 addJS: "<script src='https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.0/masonry.pkgd.min.js' type='text/javascript'> \n </script><script src='//cdn.jsdelivr.net/blazy/latest/blazy.min.js' type='text/javascript'></script> \n <script src='/assets/main/js/portfolio.js'"
  };
var contact = {
   title: 'Contact Rombu!',
   addCSS: "<link rel='stylesheet' href='/assets/main/css/contact.css'>",
   addJS: '<script src="/assets/main/js/contact.js" type="text/javascript"></script>',
  };
var about = {
  title: 'About Rombu',
  addCSS: "<link rel='stylesheet' href='/assets/main/css/about.css'>",
  addJS: '<script src="/assets/main/js/about.js" type="text/javascript"></script>',


};
var brands = {
  title: 'Rombu Brands'
};

// Home
router.get('/', function(req, res) {
  db.Video.findAll({})
    .then(function(results) {
      res.locals.video = results;
      res.render('main/index', home);
    });
});

// portfolio
router.get('/portfolio', function(req, res) {
	db.Video.findAll({})
    .then(function(results) {
    	res.locals.video = results;
      res.render('main/portfolio', portfolio);
    });
});

// Contact
router.get('/contact', function(req, res) {
  res.render('main/contact', contact);
});
// about
router.get('/about', function(req, res) {
  res.render('main/about', about);
});
// brands(just in case)
router.get('/brands', function(req, res) {
  res.render('main/brands', brands);
});

module.exports = router;
