import React from "react";
import "./card.css";

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
      header: "Card 1",
      description: "Content for Card 1",
      imageUrl: "https://picsum.photos/200/300"
    },
    {
      header: "Card 2",
      description: "Content for Card 2",
      imageUrl: "https://picsum.photos/200/300"
    },
    {
      header: "Card 3",
      description: "Content for Card 3",
      imageUrl: "https://picsum.photos/200/300"
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