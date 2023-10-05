import React, { Component } from "react";
import "./App.css";
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

class App extends Component {
  render() {
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
}

export default App;



// Usage
<Card
          imageUrl="https://picsum.photos/300/500"
          header="Card Header"
          description="This is a simple reusable React card component."
        />


// CSS
/* Card.css */
.card-container {
  display: flex;
  flex-wrap: wrap; /* Add this property to enable flex-wrap */
  justify-content: space-between;
  /* You can adjust the container's styling as needed */
}

.card {
  width: calc(
    33.33% - 20px
  ); /* Adjust the width and margin as needed for responsiveness */
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
}

.card-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
}

.card-content {
  padding: 20px;
}

.card-header {
  font-size: 1.2rem;
  margin: 0;
}

.card-description {
  font-size: 1rem;
  margin: 10px 0;
}

@media (max-width: 768px) {
  /* Media query for mobile devices */
  .card {
    width: 100%; /* Full width on mobile */
    margin: 10px 0;
  }
}

