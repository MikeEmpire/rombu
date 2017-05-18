var express = require('express');
var router = express.Router();

var db = require("../models");
var test = {
	 title: 'Home Pagezxcvzx' 
	};

var addPage = {
  title: 'Add Videos',
  addJS: '<script src="/assets/js/add.js" type="text/javascript"></script>'
}

router.get('/', function(req, res) {

  res.render('admin/index', test);
});

router.get('/all', function(req, res){
	 db.Video.findAll({})
    .then(function(results) {
    	res.locals.data = results;
      res.render('admin/all');
    });
})

router.get('/add', function(req, res) {
  res.render('admin/add');
})

// router.get('/all', function(req, res{
// 	res.render('')
// }))

module.exports = router;
