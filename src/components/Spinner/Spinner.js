import React, { Component } from "react";

import classes from "./Spinner.module.css";

export default class Spinner extends Component {
  render() {
    const css = [classes.Spinner];
    if (this.props.viewSpinner) {
      css.push(classes.show);
    }
    return <div id="Spinner" className={css.join(" ")}></div>;
  }
}
