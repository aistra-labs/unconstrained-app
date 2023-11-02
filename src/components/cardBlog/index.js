import React from "react";
import "./card.css";
import { images } from '../images';

const Card = ({ imageUrl, header, description, linkUrl, author, date="Aug 31, 2023" }) => {
  return (
    <div className="card-blog-css">
      <div className="card-blog">
        <img src={imageUrl} alt={header} className="card-blog-image" />
        <div className="meta-by">
          <div className="date">{date}</div>
          <div className="writer">by {author}</div>
        </div>
        <div className="card-blog-content">
          <h2 className="card-blog-header">{header}</h2>
          <p className="card-blog-description">{description}</p>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="read-more">
            <span className="read-more-text">
              Read More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      header: "Beyond Algorithms: How AI Can Enhance Our Human Connections",
      description: "The conversation around Artificial Intelligence (AI) swings between awe and apprehension. While some view AI as a harbinger of a dystopian future, others see it as a tool that can help solve humanity’s most pressing challenges, from climate change to cancer. I certainly hope that we’re on the path to the latter.  For me, however,…",
      imageUrl: images['blog1.jpg'],
      linkUrl: "https://unconstrained.blog/2023/10/03/beyond-algorithms-how-ai-can-enhance-our-human-connections/",
      author: "Fiona Reynolds",
      date: "Oct 16, 2023"
    },
    {
      header: "AI and the Evolution of Humanity: A Paradigm of Hope and Caution",
      description: "In an age dominated by algorithms and automated experiences, we find ourselves at a pivotal juncture, questioning the very essence of progress. Is there genuine merit in automating facets of our lives, particularly without a blueprint for the enriched future we envision? Such reflections underscore the profound responsibility we ...",
      imageUrl: images['blog2.jpg'],
      linkUrl: "https://docs.google.com/document/d/1kGChoeLOfZBswmJPejlQFNEikPAEOQ_oZqxAY00SKBY/edit",
      author: "Craig Johnson",
      date: "Oct 30, 2023"
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
            linkUrl={card.linkUrl}
            author={card.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;