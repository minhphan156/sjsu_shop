import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: "Banana", pic: "category-imgs/Produce_c.png" },
        { id: 2, name: "Turkey", pic: "category-imgs/Meats_c.png" }
      ]
    };
  }
  delete(product) {
    const products = this.state.products.filter(i => i.id != product.id);
    this.setState({ products });
  }

  render() {
    const listItem = this.state.products.map(item => {
      return (
        <div className="col-sm-2 product-in-cart" key={item.id}>
          <span>{item.name}</span>
          <img src={item.pic} />
          <button onClick={this.delete.bind(this, item)}>Remove</button>
        </div>
      );
    });
    /*
    let items = (
      <p className="col-sm-2 product-in-cart">
        <img src="category-imgs/Produce_c.png" alt="Produce.img" />
        <br />
        <div>Banana </div>
        <Link to="/cart" className="btn btn-light" onClick={this.handleDelete}>
          <i className="fas fa-minus text-info mr-1" />
        </Link>
        <img src="category-imgs/Meats_c.png" alt="Meats.img" />
        <br />
        <div>Turkey </div>
        <Link to="/cart" className="btn btn-light">
          <i className="fas fa-minus text-info mr-1" />
        </Link>
      </p>
    );
    */

    return (
      //empty cart, redirect to home page
      //add items to cart, redirect to browse by category page
      //checkout, redirect to checkout page
      <div className="container">
        <div className="text-center">
          <h1>Shopping Cart</h1>
          <hr className="shadow-sm" />
        </div>
        {listItem}

        <div className="btn-group mb-4" role="group">
          <Link to="/" className="btn btn-light">
            <i className="fas fa-cart-arrow-down text-info mr-1" />
            Empty Cart
          </Link>
          <Link to="/checkout" className="btn btn-light">
            <i className="fas fa-credit-card text-info mr-1" />
            Checkout
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
