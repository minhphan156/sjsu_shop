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

  Product.findOne({ description: req.query.description })
    .then(product => {
      if (!product) {
        // if product not found
        errors = { query: "product not found" };
        return res.status(404).json(errors);
      }

      res.json({
        image: product.image,
        brand: product.brand,
        price: product.price,
        description: product.description
      });
    })
    .catch(err => {
      console.error(err);
    });
});

// export so server.js can use this
module.exports = router;
