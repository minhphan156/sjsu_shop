import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DevTeam extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="display-4">Development Team</h4>
              <br />
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/sandro.jpg"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Sandro Sallenbach</h5>
                  <h6 className="display-6">Project Manager/Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="https://www.linkedin.com/in/ssallenbach/">
                    Sandro on LinkedIn
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/pic.png"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Kento Murray</h5>
                  <h6 className="display-6">Technical Lead</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/vinny.jpg"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Vinny Senthil</h5>
                  <h6 className="display-6">Product Owner</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/minh.jpg"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Minh Phan</h5>
                  <h6 className="display-6">Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/pic.png"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Dale Christian Seen</h5>
                  <h6 className="display-6">Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/pic.png"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Yu Ning Hee</h5>
                  <h6 className="display-6">Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/pic.png"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Justin Magadia</h5>
                  <h6 className="display-6">Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="col-sm-4">
                  <img
                    src="developer-imgs/sterling.jpg"
                    alt="Test Image"
                    className="category-card-img img-fluid m-0 p-0"
                  />
                  <br />
                  <br />
                  <h5 className="display-5">Sterling Gamble</h5>
                  <h6 className="display-6">Developer</h6>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(DevTeam);
