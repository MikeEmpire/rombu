var express = require('express');
var router = express.Router();

var db = require("../models");
var home = {
	 title: 'Admin - Home',
   layout: 'admin.handlebars' 
	};
var allVideos = {
   title: 'Admin - All Videos',
   layout: 'admin.handlebars' 
  };
var addVideo = {
   title: 'Admin - Add Video',
   layout: 'admin.handlebars' 
  };

router.get('/', function(req, res) {

  res.render('admin/index', home);
});

router.get('/all', function(req, res){
	 db.Video.findAll({})
    .then(function(results) {
    	res.locals.data = results;
      res.render('admin/all', allVideos);
    });
})

router.get('/add', function(req, res) {
  res.render('admin/add', addVideo);
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

module.exports = router;
