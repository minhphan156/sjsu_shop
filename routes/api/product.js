// deal with authentication here
const express = require("express");
const router = express.Router();

// Load Product model
const Product = require("../../models/Product");

// @route GET api/product/search
// @desc Register user
// @access Public
// router.get("/search/:description", (req, res) => {
router.get("/search/", (req, res) => {
  // 3-receive req to query from submitQuery at /actions/queryActions.js
  //NOTE:
  // search/?string <-we use-> req.query
  // search/:string <-we use-> req.params
  const regex = new RegExp(req.query.name, "i"); // find part of string which include lower and upper case

  // find return [ ]
  Product.find({ name: regex })
    .then(product => {
      if (!product) {
        // if product not found
        errors = { query: "product not found" };
        return res.status(404).json(errors);
      }
      res.send(product);
    })
    .catch(err => {
      console.error(err);
    });
});

// export so server.js can use this
module.exports = router;