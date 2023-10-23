import React from "react";
import "./card.css";
import { images } from '../images';

const Card = ({ imageUrl, header, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={header} className="card-image" />
      </div>
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
      header: "Humanness",
      description: "Prioritize the human experience, ensuring that the needs of educators and students drive our work. Create universal entry points to technology solutions, ensuring all educators, regardless of location or resources, can benefit.",
      imageUrl: images['humanness.svg']
    },
    {
      header: "Collaboration",
      description: "Foster a community where sharing ideas and resources is the norm. Provide tools that simplify educators' tasks, freeing them to focus on relationships and meaningful learning.",
      imageUrl: images['collaboration.svg']
    },
    {
      header: "Impact",
      description: "Strive for a transformative and lasting effect on education, measured by the quality of interactions and the depth of learning we facilitate. Continually adapt to meet the evolving needs of educators and students.",
      imageUrl: images['impact.svg']
    },
    {
      header: "Integrity",
      description: "Uphold ethical standards, including data privacy and intellectual property rights, while actively working to reduce bias in our technology.",
      imageUrl: images['integrity.svg']
    }
  ];

  return (
    <div className="card-values">
      <div className="card-section">
        <div className="card-section-header">Values</div>
        <div className="card-section-header-container">
          <div className="card-section-header-inner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar.
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Cards;