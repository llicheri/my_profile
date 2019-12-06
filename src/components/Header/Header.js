import React from "react";

import myself from "../../assets/images/myself.jpg";
import coverBg3 from "../../assets/images/cover_bg_3.jpg";

export default function Header() {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: `url(${coverBg3})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc js-fullheight animate-box"
                data-animate-effect="fadeIn"
              >
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
