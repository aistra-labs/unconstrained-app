/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useRef } from "react";
import "./footer.css";
import { image }from '../images';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isCoachingRoute = location.pathname.startsWith('/coaching');
    const footerRef = useRef();

    useEffect(() => {
        if (isCoachingRoute) {
            footerRef.current.classList.add('display-none');
          } else {
            footerRef.current.classList.remove('display-none');
          }
    }, [isCoachingRoute])

    return (
        <div ref={footerRef} className="footer-container">
            <div className="top-footer">
                <div className="left-footer">
                    <img className="footer-logo" src={image['logo.svg']} alt="Unconstrained Logo" />
                    <span className="footer-desc">Find us here</span>
                    <div className="footer-icon-container">
                        <img className="footer-icon" src={image['twitter-icon.svg']} alt="twitter-icon" />
                        <img className="footer-icon" src={image['fb-icon.svg']} alt="fb-icon" />
                        <img className="footer-icon" src={image['insta-icon.svg']} alt="insta-icon" />
                        <img className="footer-icon" src={image['ld-icon.svg']} alt="ld-icon" />
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
