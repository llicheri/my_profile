import React from "react";

export default function Work(props) {
  return (
    <div className="col-md-3 text-center col-padding animate-box">
      <a
        href={props.link}
        className="work"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="desc">
          <h3>{props.name}</h3>
          <span>{props.description}</span>
        </div>
      </a>
    </div>
  );
}
