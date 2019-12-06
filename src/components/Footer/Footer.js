import React, { Component } from "react";

import classes from "./Footer.module.css";
import Aux from "../../hoc/Auxiliary";

export default class Footer extends Component {
  state = {
    isButtonVisisble: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ isButtonVisisble: true });
    } else if (this.state.isButtonVisisble) {
      this.setState({ isButtonVisisble: false });
    }
  };
  onGoTopClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    let buttonClasses = [classes.Gototop];
    if (this.state.isButtonVisisble) {
      buttonClasses.push(classes.active);
    }
    return (
      <Aux>
        <div className={classes.Footer}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  &copy; 2019 Lorenzo Licheri. All Rights Reserved. <br />
                  Designed by{" "}
                  <a href="http://lorenzolicheri.com" target="_blank">
                    Lorenzo Licheri
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={buttonClasses.join(" ")} id="js-top">
          {/* <a href="#" className="js-gotop">
            <i className="icon-arrow-up22"></i>
          </a> */}
          <a className="js-gotop" onClick={this.onGoTopClickHandler}>
            <i className="icon-arrow-up22"></i>
          </a>
        </div>
      </Aux>
    );
  }
}
