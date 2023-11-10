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
      description: "Imagined and designed to help you harness and leverage emerging technologies specifically AI so that you can spend more time doing what you do best: Supporting your students.",
      imageUrl: images['p25.jpg'],
      link: '/courses'
    },
    {
      header: "Curation",
      description: "Vetted and curated for you to grab-n-go; saving you still more time for what matters most: Deeper teaching and relationships.",
      imageUrl: images['p28.jpg'],
      link: '/resources'
    },
    {
      header: "Coaching",
      description: "Created and trained to support you; our coaches are your coaches for: planning, assessing, working with data, and general productivity.",
      imageUrl: images['p26.jpg'],
      link: '/coaching'
    },
    {
      header: "Community",
      description: "Empowered and connected educators like you, from around the globe, are ready to: Play with and explore the integration of emerging technologies into the teaching and learning journey.",
      imageUrl: images['p27.jpg'],
      link: '/community'
    }
  ];

  return (
    <div className="card-css" key="cards_offer">
      <div className="card-section">
        <div className="card-section-header">What We Offer</div>
        <div className="card-container">
          {cardData.map((card) => (
            <a href={card.link} className="offer-card">
            <Card
              key={card.link}
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