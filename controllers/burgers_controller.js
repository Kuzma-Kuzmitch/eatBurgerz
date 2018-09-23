var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var handleBars = {
      burgers: data
    };
    console.log(handleBars)
    res.render("index", handleBars);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.name, req.body.devoured, function(result) {
    res.json({id : result.insertID});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update({
    devoured: req.body.devoured
  }, req.params.id, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
