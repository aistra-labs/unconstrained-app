/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import "./about.css";
import { images } from "../images";

const About = () => {

  return (
    <div className="about-container">
      <div className="about-banner">
        <div className="banner-image-container">
          <img className="banner-image" src={images.aboutBanner} loading="lazy" alt="banner" />
        </div>
        <div className="banner-content">
          <div className="banner-title">
            <span>Learn More About</span>
            <span className="orange-title">UnconstrainED</span>
          </div>
          <div className="banner-desc">
            Sed aliquam dictumst quisque eget non nisl in rhoncus. 
            In a ipsum ut aliquam ac felis consequat. 
            In sit diam porta laoreet. Amet id magna diam diam in egestas.
          </div>
        </div>
      </div>
      <div className="achievement-container">
        <div className="achievement-title">
          Counting Our Achievements
        </div>
        <div className="achivement-desc">
          <div className="achievement">
            <div className="count">2.5K</div>
            <div className="sub-heading">Satisfied Customer</div>
          </div>
          <div className="achievement">
            <div className="count">4.2K</div>
            <div className="sub-heading">Courses</div>
          </div>
          <div className="achievement">
            <div className="count">15+</div>
            <div className="sub-heading">Years of experience</div>
          </div>
          <div className="achievement">
            <div className="count">80</div>
            <div className="sub-heading">Team members</div>
          </div>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission-title">
            Our Mission
          </div>
          <div className="mission-desc">
            To cultivate a global network of educators, 
            empowered to integrate emerging technologies into the learning experience, 
            freeing time to build nurturing, transformative relationships with students.
          </div>
        </div>
        <div className="mission-image-container">
          <img className="banner-image" src={images.missionImg} loading="lazy" alt="banner" />
        </div>
      </div>
      <div className="mission-container vision-container">
        <div className="mission-image-container">
          <img className="banner-image" src={images.visionImg} loading="lazy" alt="banner" />
        </div>
        <div className="mission-content">
          <div className="mission-title">
            Our Vision
          </div>
          <div className="mission-desc">
            Our vision is to revolutionize education by creating a world where learning knows no boundaries. 
            We envision a future where access to high-quality education is universal, personalized, and deeply engaging. 
            Through cutting-edge technology, innovative teaching methodologies, and a relentless commitment to student success, 
            we aim to empower learners to explore their passions, unlock their full potential, and become lifelong contributors to a global community. 
            Our vision is a world where education not only prepares individuals for the challenges of tomorrow but also inspires them to shape a brighter future for all.
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
