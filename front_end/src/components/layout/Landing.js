import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  componentDidMount = () => {
    // during logged in , if we change url to landing/home it will redirect to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  render() {
    console.log("+++at landing ++++" + JSON.stringify(this.props.query));
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Spartanstop</h1>
                <p>One stop for {this.state.query.price} your combat's need </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  query: state.query
});

export default connect(mapStateToProps)(Landing);
