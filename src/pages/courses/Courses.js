/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import "./courses.css";
import { image }from "../../components/images";

const Courses = () => {

  return (
    <div className="courses-container">
      <div className="courses-banner-container">
        <div className="banner-content">
          <div className="banner-title">
            <span className="orange-title">AI-Enhanced</span>
            <span>Learning Design</span>
          </div>
          <div className="banner-desc">
            Sed aliquam dictumst quisque eget non nisl in rhoncus. 
            In a ipsum ut aliquam ac felis consequat. In sit diam porta laoreet. 
            Amet id magna diam diam in egestas.
          </div>
          <img className="signup-btn" src={image['courses-signup-btn.svg']} loading="lazy" alt="signup button" />
        </div>
        <div className="courses-banner">
          <div className="banner-image-container">
            <div className="image-background">
              <img className="courses-banner" src={image['courses-banner.svg']} loading="lazy" alt="courses banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Courses);
