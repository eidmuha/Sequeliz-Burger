// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var express = require("express");
var router = express.Router();

// Routes
// =============================================================
// module.exports = function() {

  // GET route for getting all of the posts
  router.get("/", function(req, res) {
    // console.log("req.body", req.body)
    db.Burger.findAll({})
      .then(function(dbBurger) {
        // console.log(dbBurger)
        console.log(">>>>>>>>>>>>>> ", dbBurger)

        res.render("index", {burgers: dbBurger});
      });
  });

  // // Get route for returning posts of a specific category
  // router.get("/api/posts/category/:category", function(req, res) {
  //   db.Burger.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.render("index",dbPost);
  //     });
  // });

  // Get route for retrieving a single post
  router.get("/api/posts/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  router.post("/api/burgers", function(req, res) {
    // console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // PUT route for updating posts
  router.put("/api/burgers/:id", function(req, res) {
    console.log("=============================::::::: ",req.body.devoured)
    db.Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        console.log("++++++++++++++++", dbPost)
        res.json(dbPost);
      });
  });
// };
module.exports = router;