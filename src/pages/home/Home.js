import React, { memo } from "react";
import "./home.css";
import Cards from "../../components/card";
import CardBlog from "../../components/cardBlog";
// import Testimonials from "../../components/testimonials";
import { images } from "../../components/images";
import SubscribeComponent from "../../components/subscribeComponent";

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="banner-content" style={{ display: 'flex' }}>
          <div className="banner-title">
            <div>The Future of Learning is</div>
            <div className="orange-title">UnconstrainED</div>
          </div>
          <div className="banner-desc">
            Partnering with teachers to harness the power of
            emerging technology to enable a human-centred
            approach to learning.
          </div>
          <div className="banner-desc">
            <SubscribeComponent title="Get in Touch"/>
          </div>
          {/* <img className="demo-btn" src={images['demo-video-btn.svg']} loading="lazy" alt="demo button" /> */}
        </div>
        <div className="banner-image-container">
          <img className="banner-image" src={images['banner-image.svg']} loading="lazy" alt="banner" />
        </div>
      </div>
      <div className="body-rest">
        <Cards />
        <CardBlog />
        {/* <Testimonials /> */}
      </div>
      <div className="bottom-banner">
        <img className="banner-image" src={images['home-bottom-banner.svg']} loading="lazy" alt="banner" />
        <div className="banner-content">
          <div className="banner-title">
            Join UnconstrainED
          </div>
          <div className="banner-desc">
            Become a member of our dedicated team and contribute to our mission of uplifting educators and their students.
          </div>
          {/* <div className="banner-btn">
            <img className="login-btn" src={images['JoinTeam-btn.svg']} alt="Join button" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
