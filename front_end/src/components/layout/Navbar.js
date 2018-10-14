import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { submitQuery } from "../../actions/queryActions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./Search";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ query: e.target.value });
  }

  onClick(e) {
    //NOTE: we assume user will search for name
    // 1-submit query as object with to submitQuery at queryActions.js
    const newQuery = {
      name: this.state.query
    };
    this.props.submitQuery(newQuery);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            {user.name}
          </Link>
        </li>

        <li className="nav-item">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
              alt={"user"}
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="/categories">
              Categories
            </Link>
            <Link to="/cart" className="btn btn-light">
              <i className="fas fa-shopping-cart text-info mr-1" />
            </Link>
            <div className="input-group input-group-sm col-6">
              <input
                style={{ height: 36 }}
                type="text"
                className="form-control"
                name="search"
                value={this.state.query}
                onChange={this.onChange}
              />
              <div className="input-group-append">
                <Link to="/Search">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.onClick}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </div>

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  query: state.query
});
// this.props.query = { productQuery : data}
// if this.props.query is empty we will not show the Search page

export default connect(
  mapStateToProps,
  { logoutUser, submitQuery, clearCurrentProfile }
)(Navbar);
