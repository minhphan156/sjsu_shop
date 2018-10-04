const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const productSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Product = mongoose.model("Product", productSchema); // create model database
