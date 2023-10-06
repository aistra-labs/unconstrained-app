import React from "react";
import "./card.css";
import Card1Img from '../../assets/jpg/p25.jpg';

const Card = ({ imageUrl, header, description }) => {
  return (
    <div className="card">
      <img src={Card1Img} alt={header} className="card-image" />
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      header: "Courses",
      description: "Our courses are designed to help you to understand and harness emerging technologies so that you can spend more time doing what you do best - supporting your students.",
      imageUrl: "../../assets/jpg/p25.jpg"
    },
    {
      header: "Courses",
      description: "Our courses are designed to help you to understand and harness emerging technologies so that you can spend more time doing what you do best - supporting your students.",
      imageUrl: "../../assets/jpg/p25.jpg"
    },
    {
      header: "Courses",
      description: "Our courses are designed to help you to understand and harness emerging technologies so that you can spend more time doing what you do best - supporting your students.",
      imageUrl: "../../assets/jpg/p25.jpg"
    },
    {
      header: "Courses",
      description: "Our courses are designed to help you to understand and harness emerging technologies so that you can spend more time doing what you do best - supporting your students.",
      imageUrl: "../../assets/jpg/p25.jpg"
    }
    // Add more card data as needed
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          header={card.header}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Cards;