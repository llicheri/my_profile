import React from "react";

import Chart from "./Chart/Chart";
import Bar from "./Bar/Bar";

export default function Skills(props) {
  return (
    <div id="fh5co-skills" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row row-pb-md">
          {props.skills.map(skill => {
            return <Chart key={skill.name} {...skill} />;
          })}
        </div>
        <div className="row">
          <div className="col-md-6">
            {props.skills.map((skill, index) => {
              return index % 2 === 0 ? (
                <Bar key={skill.name} index={index} {...skill} />
              ) : null;
            })}
          </div>
          <div className="col-md-6">
            {props.skills.map((skill, index) => {
              return index % 2 !== 0 ? (
                <Bar key={skill.name} index={index} {...skill} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
