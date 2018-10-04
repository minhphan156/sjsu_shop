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

  Product.findOne({ name: req.query.name })
    .then(product => {
      if (!product) {
        // if product not found
        errors = { query: "product not found" };
        return res.status(404).json(errors);
      }

      res.json({
        image: product.image,
        name: product.name,
        price: product.price,
        description: product.description
      });
    })
    .catch(err => {
      console.error(err);
    });
});

//   var keyword = req.query.name.split(" ");
//   var productArray = [];

//   keyword.forEach(function(el) {
//     Product.findOne({ name: /el/i })
//       .then(product => {
//         if (!product) {
//           // if product not found
//           errors = { query: "product not found" };
//           return res.status(404).json(errors);
//         }
//         if (productArray.indexOf(product) < 0) {
//           productArray.push(product);
//         }
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   });

//   res.json({
//     image: productArray[0].image,
//     name: productArray[0].name,
//     price: productArray[0].price,
//     description: productArray[0].description
//   });
// });

// export so server.js can use this
module.exports = router;
