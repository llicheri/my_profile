import React from "react";

const MyService = props => {
  return (
    <div className="col-md-4 text-center">
      <div className="feature-left">
        <span className="icon">
          <i className={props.icon}></i>
        </span>
        <div className="feature-copy">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyService;
