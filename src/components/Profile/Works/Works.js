import React from "react";

import Work from "./Work/Work";

export default function Works(props) {
  return (
    <div id="fh5co-work" className="fh5co-bg-dark">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Work</h2>
          </div>
        </div>
        <div className="row">
          {props.works.map(work => {
            return <Work key={work.id} {...work} />;
          })}
        </div>
      </div>
    </div>
  );
}
