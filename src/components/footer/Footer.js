/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useRef } from "react";
import "./footer.css";
import { images } from '../images';
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
                    <img className="footer-logo" src={images['unconstrained-logo.svg']} alt="Unconstrained Logo" />
                    <span className="footer-desc">Find us here</span>
                    <div className="footer-icon-container">
                        <a href="https://twitter.com/UnconstrainED23" target="_blank" rel="noreferrer">
                            <img className="footer-icon" src={images['twitter-icon.svg']} alt="twitter-icon" />
                        </a>
                        <a href="https://www.facebook.com/unconstrained.work/" target="_blank" rel="noreferrer">
                            <img className="footer-icon" src={images['fb-icon.svg']} alt="fb-icon" />
                        </a>
                        <a href="https://www.instagram.com/unconstrained.ai/" target="_blank" rel="noreferrer">
                            <img className="footer-icon" src={images['insta-icon.svg']} alt="insta-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/unconstrained-work/" target="_blank" rel="noreferrer">
                            <img className="footer-icon" src={images['ld-icon.svg']} alt="ld-icon" />
                        </a>
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
