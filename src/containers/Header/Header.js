import React, { Component } from "react";

import myself from "../../assets/images/myself.jpg";
import coverBg3 from "../../assets/images/cover_bg_3.jpg";
// import classes from "./Header.js";

export default class Header extends Component {
  state = { isMobile: null };
  // is the application Mobile?
  isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        this.Android() ||
        this.BlackBerry() ||
        this.iOS() ||
        this.Opera() ||
        this.Windows()
      );
    }
  };
  // if on mobile app change state
  calculateIfMobile = function() {
    if (this.isMobile.any()) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };
  componentDidMount() {
    this.calculateIfMobile();
  }
  render() {
    // set header height as the window height if not on mobile
    let headerStyle = { backgroundImage: `url(${coverBg3})` };
    let style = {};
    if (!this.state.isMobile) {
      headerStyle.height = window.innerHeight;
      style.height = window.innerHeight;
    }
    return (
      <header
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        style={headerStyle}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t" style={style}>
                <div className="display-tc animate-box" style={style}>
                  <div
                    className="profile-thumb"
                    style={{ background: `url(${myself})` }}
                  ></div>
                  <h1>
                    <span>Lorenzo Licheri</span>
                  </h1>
                  <h3>
                    <span>Web Developer / Front-end Developer</span>
                  </h3>
                  <br />
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="https://github.com/llicheri">
                        <i className="icon-github2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/lorenzo-licheri-28630b61/">
                        <i className="icon-linkedin2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_lorenzolicheri/">
                        <i className="icon-instagram2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="icon-facebook2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
