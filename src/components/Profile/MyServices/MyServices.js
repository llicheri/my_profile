import React from "react";

import MyService from "./MyService/MyService";

const MyServices = props => {
  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>My Services</h2>
            </div>
          </div>
          <div className="row">
            {props.services
              ? props.services.map(service => {
                  return <MyService key={service.title} {...service} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
