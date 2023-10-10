import React from "react";
import "./card.css";
import { images } from '../images';

const Card = ({ imageUrl, header, description }) => {
  return (
    <div className="card-blog">
      <img src={imageUrl} alt={header} className="card-blog-image" />
      <div className="meta-by">
        <div className="date">Aug 31, 2023</div>
        <div className="writer">by Ganda Suthivarakom</div>
      </div>
      <div className="card-blog-content">
        <h2 className="card-blog-header">{header}</h2>
        <p className="card-blog-description">{description}</p>
        <div className="read-more"><div className="read-more-text" >Read More</div></div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      header: "Running remote offsites and onbordings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus dignissim quis.",
      imageUrl: images.blog1
    },
    {
      header: "Executive coach Joe Kwon reaches clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel tellus dignissim quis.",
      imageUrl: images.blog2
    }
  ];

  return (
    <div className="card-blog-section">
      <div className="card-blog-section-header">Blog</div>
      <div className="card-blog-container">
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
  );
}

export default Cards;