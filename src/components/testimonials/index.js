import React from "react";
import "./testimonial.css";
import Carousel from './carousel';

const Cards = () => {

  return (
    <div className="testimonial-card-css">
      <div className="card-section">
        <div className="card-section-header">Testimonials</div>
        <Carousel />
      </div>
    </div>
  );
}

export default Cards;