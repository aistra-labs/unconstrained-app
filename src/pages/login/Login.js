import React, { memo } from "react";
import "./login.css";
import { images } from "../../components/images";
import { Link } from "react-router-dom";
import InputField from "../../components/inputField";

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
        <button className="signup-container">
          <img src={images['google.svg']} alt="Google Logo" width="24px" />
          <div className="signup-google">
            Sign Up with Google
          </div>
        </button>
        <div className="line-text">
          <div className="register-with-email">
            Or register with an email
          </div>
        </div>
        <div className="name">
          <InputField title={'First Name'} onChange={(e) => console.log('email', e)} width={200} />
          <InputField title={'Last Name'} onChange={(e) => console.log('email', e)} width={200} margin={20} />
        </div>
        <InputField title={'Email'} onChange={(e) => console.log('email', e)} />
        <InputField
          title={'Password'}
          isPassword={true}
          onChange={(e) => console.log('password', e)}
          details={'Use 8 or more characters with a mix of letters, numbers & symbols.'}
        />
        <button className="signup-btn">Sign Up</button>
        <div className="details">
          By signing up, you accept UnconstrainED privacy policy and terms of use.
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
