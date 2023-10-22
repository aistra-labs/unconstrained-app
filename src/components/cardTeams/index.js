import React from "react";
import "./card.css";
import { images } from '../images';

const Card = ({ imageUrl, header, link }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={header} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <a href={link} target="_blank" rel='noreferrer' ><img className="card-description" alt="linkedin-logo" src={images['linkedin-team.svg']} /></a>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      imageUrl: images['alex-tm.jpg'],
      header: "Alex Johnson",
      link: 'https://www.linkedin.com/in/alexrajohnson'
    },
    {
      imageUrl: images['craig-team.jpg'],
      header: "Craig Johnson",
      link: 'https://www.linkedin.com/in/craigjohnson2010'
    },
    {
      imageUrl: images['fiona-team.jpg'],
      header: "Fiona Reynolds",
      link: 'https://www.linkedin.com/in/fiona-reynolds-42682013'
    },
    {
      imageUrl: images['naveen-team.jpg'],
      header: "Naveen Upadhyay",
      link: 'https://www.linkedin.com/in/naveen-upadhyay-76612210'
    },
    {
      imageUrl: images['neeraj-team.jpg'],
      header: "Neeraj Bhargava",
      link: 'https://www.linkedin.com/in/neeraj-bhargava-a87474'
    },
    {
      imageUrl: images['tarun-team.jpg'],
      header: "Tarun Sachdeva",
      link: 'https://www.linkedin.com/in/1tarunsachdeva'
    },
  ];

  return (
    <div className="card-teams">
      <div className="card-section">
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              header={card.header}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;