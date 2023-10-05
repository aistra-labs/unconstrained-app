/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
// import axios from "axios";
import "./home.css";
import demoBtn from '../../assets/svg/demo-video-btn.svg';
import banner from '../../assets/svg/banner-image.svg'

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="banner-content">
          <div className="banner-title">
            <span>Future of Learning is</span>
            <span className="orange-title">UnconstrainED</span>
          </div>
          <div className="banner-desc">
            Partnering with teachers to harness the power of 
            emerging technology to enable human-centred 
            approach to learning
          </div>
          <img className="demo-btn" src={demoBtn} loading="lazy" alt="demo button" />
        </div>
        <div className="banner-image-container">
          <img className="banner-image" src={banner} loading="lazy" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
