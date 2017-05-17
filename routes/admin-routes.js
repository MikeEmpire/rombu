var express = require('express');
var router = express.Router();

var db = require("../models");
var index = require("../views/admin/index.ejs");

router.get('/', function(req, res) {
  res.render('admin/layouts/main.ejs', index);
});

module.exports = router;
