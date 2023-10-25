/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./community.css";
import { images }from "../../components/images";
import CommunityCard from "../../components/communityCard/CommunityCard";

const Community = () => {

  const cardData = [
    {
      header: "Any Bay-Area Community members interested in a meet-up?",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      imageUrl: '',
      username: 'Jessica L Williams',
      designation: 'Student',
      userPic: images['user-icon1.svg'],
      postTime: '22'
    },
    {
      header: "Using Apple Pencil with the Draw App",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imageUrl: images['community-card-img.png'],
      username: 'Aiony Haust',
      designation: 'Student',
      userPic: images['user-icon2.svg'],
      postTime: '22'
    },
    {
      header: "Any Bay-Area Community members interested in a meet-up?",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      imageUrl: '',
      username: 'Jessica L Williams',
      designation: 'Student',
      userPic: images['user-icon1.svg'],
      postTime: '22'
    },
    {
      header: "Using Apple Pencil with the Draw App",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imageUrl: images['community-card-img.png'],
      username: 'Aiony Haust',
      designation: 'Student',
      userPic: images['user-icon2.svg'],
      postTime: '22'
    },
  ];

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
      <div className="community-bottom">
        <div className="community-bottom-header">Community Questions</div>
        <div className="community-cards">
          {cardData.map((card, index) => {
            return(
              <CommunityCard 
                key={index}
                header={card.header}
                description={card.description}
                imageUrl={card.imageUrl}
                username={card.username}
                designation={card.designation}
                userPic={card.userPic}
                postTime={card.postTime}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Community);
