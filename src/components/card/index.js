import React from "react";
import "./card.css";
import { images }from '../images';

const Card = ({ imageUrl, header, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={header} className="card-image" />
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
      imageUrl: images['p25.jpg'],
      link: '/courses'
    },
    {
      header: "Curated Tools and Resources",
      description: "We vet the newest tools and resources in emerging technology and let you know how they can best support you and your students and give you back time.",
      imageUrl: images['p28.jpg'],
      link: '/resources'
    },
    {
      header: "Coaching with AI",
      description: "Meet our coaches who can support you in planning and productivity. (changing that to who, taking out comma after planning and adding full stop after productivity)",
      imageUrl: images['p26.jpg'],
      link: '/coaching'
    },
    {
      header: "Community",
      description: "Connect with educators like you who are ready to explore and exchange ideas.",
      imageUrl: images['p27.jpg'],
      link: '/community'
    }
  ];

  return (
    <div className="card-css" key="card">
      <div className="card-section">
        <div className="card-section-header">What We Offer</div>
        <div className="card-container">
          {cardData.map((card, index) => (
            <a href={card.link} class="offer-card">
            <Card
              key={`card_${index}`}
              imageUrl={card.imageUrl}
              header={card.header}
              description={card.description}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;