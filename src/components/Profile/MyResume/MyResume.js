import React, { Component } from "react";

import Resume from "./Resume/Resume";

export default class MyResume extends Component {
  render() {
    return (
      <div id="fh5co-resume" className="fh5co-bg-color">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>My Resume</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Work Experience</h3>
                  </div>
                </li>
                {this.props.works.map((work, index) => {
                  let side;
                  index % 2 === 0 ? (side = "left") : (side = "right");
                  return (
                    <Resume
                      key={work.title}
                      title={work.title}
                      location={work.company}
                      startDate={work.startDate}
                      endDate={work.endDate}
                      description={work.description}
                      side={side}
                      type="work"
                    />
                  );
                })}
                <br />
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Courses</h3>
                  </div>
                </li>
                {this.props.courses.map((course, index) => {
                  let side;
                  index % 2 === 0 ? (side = "left") : (side = "right");
                  return (
                    <Resume
                      key={course.title}
                      title={course.title}
                      location={course.course}
                      startDate={course.startDate}
                      endDate={course.endDate}
                      description={course.description}
                      side={side}
                      type="course"
                    />
                  );
                })}
                <br />
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
                {this.props.studies.map((study, index) => {
                  let side;
                  index % 2 === 0 ? (side = "left") : (side = "right");
                  return (
                    <Resume
                      key={study.title}
                      title={study.title}
                      location={study.school}
                      startDate={study.startDate}
                      endDate={study.endDate}
                      description={study.description}
                      side={side}
                      type="study"
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
