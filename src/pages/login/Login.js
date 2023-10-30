import React, { memo } from "react";
import "./login.css";
import { images } from "../../components/images";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-banner-container">
        <Link to="/">
          <img src={images['new-logo.svg']} alt="Unconstrained Logo" width="300px" />
        </Link>
        <div className="sub-heading">
          The Future of Learning is UnconstrainED
        </div>
        <img src={images['login-brand.svg']} alt="Unconstrained Logo" width="377px" />
      </div>
      <div className="body-rest">
        <div className="header">
          Create an Account
        </div>
        <div className="already-account">
          Already have an account?
          <div className="signin-here">
            Sign In here
          </div>
        </div>
        <div className="header">
          Google button
        </div>
        <div className="line-text">
          <div className="register-with-email">
            Or register with an email
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
