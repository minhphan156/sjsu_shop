// deal with authentication here
const express = require("express");
const router = express.Router();

// Load Product model
const Product = require("../../models/Product");

// @route GET api/product/search
// @desc Register user
// @access Public
router.post("/search", (req, res) => {
  // 3-receive req to query from submitQuery at /actions/queryActions.js
  // req.body = newQuery
  Product.findOne(req.body)
    .then(product => {
      if (!product) {
        // if product not found
        errors = { query: "product not found" };
        return res.status(404).json(errors);
      }

      res.json({
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
