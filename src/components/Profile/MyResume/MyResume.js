import React, { Component } from "react";

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
                  const workCss = ["animate-box"];
                  if (index % 2 === 0) {
                    workCss.push("timeline-unverted");
                  } else {
                    workCss.push("timeline-inverted");
                  }
                  return (
                    <li key={work.title} className={workCss.join(" ")}>
                      <div className="timeline-badge">
                        <i className="icon-suitcase"></i>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">{work.title}</h3>
                          <span className="company">
                            {work.company} - {work.startDate} - {work.endDate}
                          </span>
                        </div>
                        <div className="timeline-body">
                          <p>{work.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
                <br />
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <i className="icon-graduation-cap"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Masters Degree</h3>
                      <span className="company">
                        University Name - 2007 - 2009
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge">
                    <i className="icon-graduation-cap"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Bachelors Degree</h3>
                      <span className="company">
                        University Name - 2002 - 2006
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <i className="icon-graduation-cap"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Diploma Course</h3>
                      <span className="company">
                        College Name - 1999 - 2001
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge">
                    <i className="icon-graduation-cap"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Graduation</h3>
                      <span className="company">
                        College Name - 1994 - 1998
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
