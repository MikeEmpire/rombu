var express = require('express');
var router = express.Router();

var db = require("../models");
var test = {
	 title: 'Home Page' 
	};

var addPage = {
  title: 'Add Videos',
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
  res.render('admin/add', {title: 'Add Videos'});
})

// Get single user
/*router.get("/:id", function(req, res) {
  db.Video.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(results) {
    res.locals.data = results;
    res.render('admin/edit');
  });
});*/
// router.get('/all', function(req, res{
// 	res.render('')
// }))

module.exports = router;
