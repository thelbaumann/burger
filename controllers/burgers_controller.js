const express = require("express");
const burger = require("../models/burger");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {

  burger.create([req.body.burger_name], function(result) {

    console.log("req.body.burger_name: " + req.body.burger_name);

    res.json({ id: result.insertId });
  });

});

router.put("/api/burgers/:id", function(req, res) {

  var condition = req.params.id;

  burger.update(condition, function(result) {

        if (result.changedRows == 0) {

          return res.status(404).end();

        } 
        
        else {

          res.status(200).end();

        }
  });

});

module.exports = router;

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
