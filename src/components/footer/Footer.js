/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import "./footer.css";
import logo from '../../assets/svg/unconstrained-logo.svg'
import twitterIcon from '../../assets/svg/twitter-icon.svg'
import fbIcon from '../../assets/svg/fb-icon.svg'
import instaIcon from '../../assets/svg/insta-icon.svg'
import ldIcon from '../../assets/svg/ld-icon.svg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="top-footer">
                <div className="left-footer">
                    <img className="footer-logo" src={logo} alt="Unconstrained Logo" />
                    <span className="footer-desc">Find us here</span>
                    <div className="footer-icon-container">
                        <img className="footer-icon" src={twitterIcon} alt="twitter-icon" />
                        <img className="footer-icon" src={fbIcon} alt="fb-icon" />
                        <img className="footer-icon" src={instaIcon} alt="insta-icon" />
                        <img className="footer-icon" src={ldIcon} alt="ld-icon" />
                    </div>
                </div>
                <div className="mid-footer-container">
                    <div className="mid-footer">
                        <h3 className="footer-title">Company</h3>
                        <div className="sub-links">
                            <span>Home</span>
                            <span>About</span>
                            <span>Courses</span>
                            <span>Coaching</span>
                            <span>Community</span>
                            <span>Resources</span>
                        </div>
                    </div>
                    <div className="mid-footer">
                        <h3 className="footer-title">Useful Links</h3>
                        <div className="sub-links">
                            <span>Terms of Services</span>
                            <span>Privacy Policy</span>
                            <span>Cookie Policy</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
                <div className="news-container">
                    <h3 className="footer-title">Newsletter</h3>
                    <div className="sub-links">
                        <span>Sign up and receive the lastest news via email.</span>
                        <InputGroup className="mb-3 subscribe-style">
                            <Form.Control
                            placeholder="Email address"
                            aria-label="Email address"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className="subscribe-btn" id="basic-addon2">Subscribe</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                Copyright 2023 The UnconstrainED  All Rights Reserved.
            </div>
        </div>
    );
};

export default memo(Footer);
