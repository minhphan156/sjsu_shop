import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import shopLogo from "../common/transparent_logo.png";

class About extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <h4 className="display-4">About</h4>
          <br />
          blablabla
        </div>
      </div>
    );
  }
}

About.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(About);
