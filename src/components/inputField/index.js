import React, { useState } from "react";
import "./inputField.css";
import { images } from "../images";

const InputField = ({ title, onChange, isPassword = false, width = 440, margin = 0, details }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(isPassword ? "password" : "text");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };

  return (
    <div className="input-field" style={{ width: width, marginLeft: margin }}>
      <div className="header-input-field">{title}</div>
      <div className="input-container">
        <input
          type={inputType}
          className="input"
          onChange={(e) => onChange(e.target.value)}
        />
        {isPassword &&
          <button className="show-password-button" onClick={togglePasswordVisibility}>
            <img src={images['eye.svg']} alt="show/hide" width="24px" />
          </button>}
      </div>
      {details &&
        <div className="details">
          {details}
        </div>
      }
    </div>
  );
};

export default InputField;
