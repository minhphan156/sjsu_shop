import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    const query = this.props.query.productQuery;

    if (query != null) {
      const itemsList = query.map(item => {
        return (
          <div className="col-2">
            <div className="card bg-light text-dark">
              <div className="card-header d-flex align-items-center justify-content-center h-100">
                <img
                  src={item.image}
                  className="img-thumbnail"
                  alt="Responsive image"
                />
              </div>
              <div className="card-body">
                <p>
                  {item.name}
                  <br />
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div style={flexContainer}>{itemsList}</div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

const flexContainer = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between"
};

const mapStateToProps = state => ({
  query: state.query
});
// this.props.query = { productQuery : data}
// if this.props.query is empty we will not show the Search page

export default connect(
  mapStateToProps,
  {}
)(Search);
