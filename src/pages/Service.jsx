// Service.jsx
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/images/design.png" alt="designer" width="200" />
      </div>
      <div className="card-details">
        <h2 className="center">
          <Link to={`/services/${encodeURIComponent(service.service)}`}>{service.service}</Link>
        </h2>
        <p className="justify">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
