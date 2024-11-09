// src/components/ServiceSection.js
import React from "react";
import "../styles/ServiceSection.css";

const services = [
  {
    title: "High-Speed Internet",
    description: "Optical fiber connections in cabins and workspaces.",
  },
  {
    title: "Transportation",
    description: "Reliable airport pickups and drop-offs.",
  },
  { title: "Food Delivery", description: "Healthy meals delivered daily." },
  {
    title: "Homely Stay",
    description: "Spacious interiors and comfortable beds.",
  },
];

const ServiceSection = () => (
  <section id="services" className="services-section">
    <h2>Our Services</h2>
    <div className="service-cards">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceSection;
