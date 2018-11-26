import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/recipeActions";
import PropTypes from "prop-types";

export default class RecipeBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image,
      title,
      author,
      description,
      userID,
      _id,
      likes
    } = this.props.recipe;
    const { isAuthenticated, user } = this.props.auth;

    let sameUser;
    if (isAuthenticated && user.id === userID) {
      sameUser = (
        <div className="d-inline">
          <Link to={`/recipe/edit/${title}`} className="mr-auto">
            <button
              type="button"
              className="btn btn-info btn-sm p-0 pl-1 pr-1 m-0 ml-2"
            >
              Edit Recipe
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div>
        <div className="recipe-bar d-flex border m-0 p-0">
          <img
            className="recipe-bar-img img-fluid border-right"
            src={image}
            alt="test-img"
          />
          <div className="recipe-bar-desc border-left">
            <div className="d-flex m-0">
              <Link to={`/recipe/view/${_id}`} className="mr-auto">
                <h4 className="font-weight-bold ml-2 m-0">{title}</h4>
              </Link>
              <button
                type="button"
                className="btn btn-danger btn-sm rounded-0 m-0 p-1"
              >
                <i className="fas fa-heart" />{" "}
                <span className="badge badge-light">{likes.length}</span>
              </button>
            </div>
            <span className="font-style-italic ml-2 m-0">by {author}</span>
            {sameUser}
            <p className="text-truncate d-none d-md-block mt-3 ml-2 m-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
