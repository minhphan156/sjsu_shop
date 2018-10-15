import React, { Component } from "react";
import { Link } from "react-router-dom";
import { submitCategory } from "../../actions/categoryActions";
import { connect } from "react-redux";

class BrowseByCategory extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    //NOTE: we assume user will search for name
    // 1-submit query as object with to submitQuery at queryActions.js
    console.log(" 1 -brownCategory onClick ");
    const newCategory = {
      category: e
    };
    this.props.submitCategory(newCategory);
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h1 className="lobster-font">Browse By Category</h1>
          <hr className="shadow-sm" />
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/Snack">
              <img
                src="category-imgs/Snacks_c.png"
                className="category-img"
                alt="Snacks.img"
              />
              <br />
              <button
                className="category-text"
                type="button"
                onClick={() => this.onClick("snack")}
              >
                Snack
              </button>
            </Link>
          </div>
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/Drink">
              <img
                src="category-imgs/Drinks_c.png"
                className="category-img"
                alt="Drinks.img"
              />
              <br />
              <button
                className="category-text"
                type="button"
                onClick={() => this.onClick("drink")}
              >
                Drink
              </button>
            </Link>
          </div>
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/Alcohol">
              <img
                src="category-imgs/Alcohol_c.png"
                className="category-img"
                alt="Produce.img"
              />
              <br />
              <button
                className="category-text"
                type="button"
                onClick={() => this.onClick("alcohol")}
              >
                Alcohol
              </button>
            </Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/categories">
              <img
                src="category-imgs/Bakery_c.png"
                className="category-img"
                alt="Bakery.img"
              />
              <br />
              <div className="category-text">Bakery</div>
            </Link>
          </div>
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/Dairy">
              <img
                src="category-imgs/Dairy_c.png"
                className="category-img"
                alt="Dairy.img"
              />
              <br />
              <button
                className="category-text"
                type="button"
                onClick={() => this.onClick("dairy")}
              >
                Diary
              </button>
            </Link>
          </div>
          <div className="col-sm-2 border category-tile shadow">
            <Link to="/Meat">
              <img
                src="category-imgs/Meats_c.png"
                className="category-img"
                alt="Meats.img"
              />
              <br />
              <button
                className="category-text"
                type="button"
                onClick={() => this.onClick("meat")}
              >
                Meat
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
// this.props.query = { productQuery : data}
// if this.props.query is empty we will not show the Search page

export default connect(
  mapStateToProps,
  { submitCategory }
)(BrowseByCategory);
