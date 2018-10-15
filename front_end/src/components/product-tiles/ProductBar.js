import React, { Component } from "react";

/*
  The contents of this component is for testing purposes for now and will be changed to show products in the future served from the backend.
  Backend code for products is still needed.
*/
class ProductBar extends Component {
  render() {
    return (
      <div key={this.props.productKey}>
        <div className="col-2 product-bar border shadow p-2">
          <img
            src={this.props.productImage}
            alt="test img"
            className="product-bar-img m-0"
          />
          <div className="container product-bar-info m-0">
            <p className="product-bar-desc-name">{this.props.productName}</p>
            <p className="product-bar-desc-price">
              {this.props.productPrice} cents
            </p>
            <p className="product-bar-desc-category text-truncate">
              {this.props.productCategory}
            </p>
            <p className="product-bar-desc-text text-truncate">
              {this.props.productDescription}
            </p>
          </div>
          <button type="button" className="btn btn-info product-bar-btn">
            <i className="fas fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductBar;
