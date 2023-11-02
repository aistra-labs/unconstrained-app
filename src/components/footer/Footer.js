/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useRef } from "react";
import "./footer.css";
import { images } from '../images';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useLocation } from "react-router-dom";

const footerLessRoutes = ['/coaching', '/signin']

const Footer = () => {
    const location = useLocation();
    const isFooterLessRoutes = footerLessRoutes.filter(el => location.pathname.startsWith(el)).length > 0;

    const footerRef = useRef();

    useEffect(() => {
        if (isFooterLessRoutes) {
            footerRef.current.classList.add('display-none');
        } else {
            footerRef.current.classList.remove('display-none');
        }
    }, [isFooterLessRoutes])

    return (
        <div ref={footerRef} className="footer-container">
            <div className="top-footer">
                <div className="left-footer">
                    <div className="footer-logo-container">
                        {/* <img className="footer-logo" src={images['new-logo.svg']} alt="Unconstrained Logo" /> */}
                        Powered by <a href="https://aistra.com/" target="_blank" rel="noreferrer"><img
                            className="footer-logo-powered"
                            src={'https://storage.googleapis.com/aistra-website-assets/assets/logo/aistra-labs.svg'}
                            alt="Unconstrained Logo" /></a>

                    </div>
                    <span className="footer-desc">Find us here</span>
                    <div className="footer-icon-container">
                        <a href="https://twitter.com/UnconstrainED23" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={images['twitter-icon.svg']} alt="twitter-icon" />
                        </a>

                        <a href="https://www.facebook.com/unconstrained.work/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={images['fb-icon.svg']} alt="fb-icon" />
                        </a>

                        <a href="https://www.instagram.com/unconstrained.ai/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={images['insta-icon.svg']} alt="insta-icon" />
                        </a>

                        <a href="https://www.linkedin.com/company/unconstrained-work/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={images['ld-icon.svg']} alt="ld-icon" />
                        </a>
                    </div>
                </div>
                <div className="mid-footer-container">
                    <div className="mid-footer">
                        <h3 className="footer-title">Company</h3>
                        <div className="sub-links">
                            <a href="/" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Home
                                </span>
                            </a>
                            <a href="/about" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                About
                                </span>
                            </a>
                            <a href="/courses" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Courses
                                </span>
                            </a>
                            <a href="/coaching" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Coaching
                                </span>
                            </a>
                            <a href="https://discord.com/channels/1146791094890283018/1146795215429062708" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Community
                                </span>
                            </a>
                            <a href="/resources" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Curated Tools
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mid-footer">
                        <h3 className="footer-title">Useful Links</h3>
                        <div className="sub-links">
                            <a href="https://aistra.com/termsandcondition/" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Terms of Services
                                </span>
                            </a>
                            <a href="https://aistra.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Privacy Policy
                                </span>
                            </a>
                            {/* <a href="/" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Cookie Policy
                                </span>
                            </a> */}
                            <a href="/" rel="noopener noreferrer" className="link-no-deco">
                                <span>
                                Contact Us
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="news-container">
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
                </div> */}
            </div>
            <div className="bottom-footer">
                Copyright 2023 The UnconstrainED  All Rights Reserved.
            </div>
        </div>
    );
};

export default memo(Footer);
