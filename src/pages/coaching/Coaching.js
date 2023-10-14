/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import "./coaching.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { images } from "../../components/images";

const Coaching = () => {

  return (
    <div className="coaching-container">
      <div className="coaching-top">
        <div className="title-text">Hi there!</div>
        <div className="title-text bottom">How can I help?</div>
      </div>
      <div className="coaching-bottom">
        <div className="coaching-input-container">
          <InputGroup className="input-val">
            <Form.Control
              placeholder="Type your question and hit enter"
              aria-label="Type your question and hit enter"
              aria-describedby="basic-addon2"
            />
            <img className="coaching-btn" src={images.coachingInputBtn} loading="lazy" alt="submit button" />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default memo(Coaching);
