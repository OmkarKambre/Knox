// Services.jsx
import React from "react";
import Service from "./Service";

const services = [
  { service: "College Predictor", description: "Guiding students to their ideal college" },
  { service: "Technical Events Recommendation", description: "Centralized info hub for students, enhancing participation in technical events" },
  { service: "Top Engineering Colleges", description: "Offering students a curated list of top colleges" },
  { service: "Spot Round Cut-off & Information", description: "Last-minute opportunities for candidates to secure admissions in educational institutions" },
];

const Services = () => {
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => (
          <Service key={index} service={curElem} />
        ))}
      </div>
    </section>
  );
};

export default Services;
