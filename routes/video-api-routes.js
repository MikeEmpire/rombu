var express = require('express');
var router = express.Router();

var db = require("../models");

  // Get all videos
  router.get("/", function(req, res) {
    db.Video.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });
  // Get single video
  router.get("/:id", function(req, res) {
    db.Video.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      res.json(results);
    });
  });
  // Add video
  router.post("/", function(req, res) {
    db.Video.create({
      name: req.body.name,
      company: req.body.company,
      url: req.body.url,
      description: req.body.description,
      featured: req.body.featured
    })
    .then(function(results) {
      res.json(results);
    });
  });
  // Delete video
  router.delete("/:id", function(req, res) {
    db.Video.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      res.json(results);
    });
  });
 /* // Put for updating videos
  router.put("/", function(req, res) {
    db.Video.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(results) {
      res.json(results);
    });
  });  */

module.exports = router;
