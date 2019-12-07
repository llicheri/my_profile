import React, { Component } from "react";
import PropTypes from "prop-types";

class Resume extends Component {
  render() {
    const workCss = ["animate-box"];
    this.props.side === "left"
      ? workCss.push("timeline-unverted")
      : workCss.push("timeline-inverted");
    let cssIcon;
    switch (this.props.type) {
      case "work":
        cssIcon = "icon-suitcase";
        break;
      case "study":
        cssIcon = "icon-graduation-cap";
        break;
      case "course":
        cssIcon = "icon-book3";
        break;
      default:
    }
    return (
      <li className={workCss.join(" ")}>
        <div className="timeline-badge">
          <i className={cssIcon}></i>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h3 className="timeline-title">{this.props.title}</h3>
            <span className="company">
              {this.props.location} - {this.props.startDate}{" "}
              {this.props.endDate ? " - " + this.props.endDate : null}
            </span>
          </div>
          <div className="timeline-body">
            <p>{this.props.description}</p>
          </div>
        </div>
      </li>
    );
  }
}

Resume.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf(["work", "study", "course"]),
  side: PropTypes.oneOf(["left", "right"])
};

export default Resume;
