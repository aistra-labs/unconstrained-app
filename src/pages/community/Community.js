/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./community.css";
import { images }from "../../components/images";

const Community = () => {

  return (
    <div className="community-container">
      <div className="community-top">
        <div className="community-content">
          <div className="community-title">
            Community Forum
          </div>
          <div className="community-desc">
            Here's where you share your insights, questions, and reflections we'll be checking in daily to pose and answer
            questions. Our learning is only as good as the quality of the conversation.
          </div>
          <div className="community-input-container">
            <InputGroup className="input-val">
              <img className="search-icon" src={images['search-icon.svg']} loading="lazy" alt="search icon" />
              <Form.Control
                placeholder="Search for questions"
                aria-label="Search for questions"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>
          <div className="community-tabs">
            <div className="tab">CREATE A ROOM</div>
            <div className="tab">QUESTIONS</div>
            <div className="tab">DISCUSSION</div>
            <div className="tab">REFLECTION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Community);
