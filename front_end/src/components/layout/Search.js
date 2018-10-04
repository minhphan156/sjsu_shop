import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Search extends Component {
  componentDidMount = () => {
    // during logged in , if we change url to Search/home it will redirect to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                {this.props.query.productQuery ? ( // if no product query show nothing
                  <div className="col-2">
                    <div className="card bg-light text-dark">
                      <div className="card-header d-flex align-items-center justify-content-center h-100">
                        <img
                          src={this.props.query.productQuery.image}
                          className="img-thumbnail"
                          alt="Responsive image"
                        />
                      </div>
                      <div className="card-body">
                        <p>
                          {this.props.query.productQuery.name}
                          <br />
                          {this.props.query.productQuery.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Search);
