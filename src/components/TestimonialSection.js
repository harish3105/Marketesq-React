// src/components/TestimonialSection.js
import React from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    name: "Arjun Raghav",
    message: "A fantastic stay! Everything was perfect.",
  },
  { name: "Anand Solanki", message: "Loved the work environment and comfort!" },
];

const TestimonialSection = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>What Our Guests Say</h2>
    <div className="testimonial-cards">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;
