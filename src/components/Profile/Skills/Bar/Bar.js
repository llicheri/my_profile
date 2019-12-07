import React, { Component } from "react";
import PropTypes from "prop-types";

class Bar extends Component {
  render() {
    const cssClasses = ["progress-bar", "progress-bar-striped", "active"];
    const indexModule = this.props.index % 6;
    if (indexModule) {
      cssClasses.push(`progress-bar-${indexModule}`);
    }
    return (
      <div className="progress-wrap">
        <h3>
          <span className="name-left">{this.props.name}</span>
          <span className="value-right">{this.props.value}%</span>
        </h3>
        <div className="progress">
          <div
            className={cssClasses.join(" ")}
            role="progressbar"
            aria-valuenow={this.props.value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${this.props.value}%` }}
          ></div>
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  index: PropTypes.number
};

export default Bar;
