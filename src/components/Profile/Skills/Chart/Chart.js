import React from "react";

export default function Chart(props) {
  return (
    <div key={props.name} className="col-md-3 col-sm-6 col-xs-12 text-center">
      <div className="chart" data-percent="95">
        <span>
          <strong>{props.name}</strong>
          {props.value}%
        </span>
      </div>
    </div>
  );
}
