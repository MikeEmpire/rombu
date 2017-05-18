var express = require('express');
var router = express.Router();

var db = require("../models");

  // Get all users
  router.get("/", function(req, res) {
    db.User.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });
  // Get single user
  router.get("/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      res.json(results);
    });
  });
  // Add users
  router.post("/", function(req, res) {
    console.log("req.body: " + req.body);
    User.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    })
    .then(function(results) {
      res.json(results);
    });
  });
  // Delete users
  router.delete(":id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      res.json(results);
    });
  });
  // Put for updating users
  router.put("/", function(req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(results) {
      res.json(results);
    });
  });  

module.exports = router;
