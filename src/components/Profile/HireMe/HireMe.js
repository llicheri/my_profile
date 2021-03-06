import React, { Component } from "react";

export default class HireMe extends Component {
  contactUsHandler() {}
  render() {
    return (
      <div id="fh5co-started" className="fh5co-bg-dark">
        <div className="overlay"></div>
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Hire Me!</h2>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
              </p>
              <p>
                <a
                  href="#0"
                  onClick={this.contactUsHandler}
                  className="btn btn-default btn-lg"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
