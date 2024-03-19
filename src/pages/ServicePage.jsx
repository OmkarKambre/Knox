// ServicePage.jsx
import React from "react";
import { Service1 } from "./Service1";
import { Service2 } from "./Service2";
import { Service3 } from "./Service3";
import { Service4 } from "./Service4";
import { useParams } from "react-router-dom";

const serviceMapping = {
  "College Predictor": Service1,
  "Technical Events Recommendation": Service2,
  "Top Engineering Colleges": Service3,
  "Spot Round Cut-off & Information": Service4,
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const SpecificService = serviceMapping[decodeURIComponent(serviceName)];

  if (SpecificService) {
    return <SpecificService />;
  } else {
    console.error(`Service not found: ${serviceName}`);
    // You can redirect or display a message here
    return (
      <div>
        <h2>Service Not Found</h2>
        <p>Sorry, the requested service is not available.</p>
      </div>
    );
  }
};

export default ServicePage;