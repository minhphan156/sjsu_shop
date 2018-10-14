import React, { Component } from "react";

/*
  The contents of this component is for testing purposes for now and will be changed in the future to show products served from the backend.
  Backend code for products is still needed.
*/
class ProductCard extends Component {
  render() {
    return (
      <div>
        <div className="container product-card border p-0">
          <img
            src="/category-imgs/Snacks_c.png"
            alt="test-img"
            className="product-card-img"
          />
          <div className="product-card-info">
            <div className="product-card-info-left border-right border-top text-truncate p-0 m-0">
              <p className="product-card-info-name m-0">Product-Name</p>
            </div>
            <div className="product-card-info-right border-left border-top text-truncate p-2 m-0">
              <button type="button" className="btn product-card-info-btn">
                <i className="fas fa-cart-plus" /> $XX.XX
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
