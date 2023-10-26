import React, { memo } from "react";
import "./courseCard.css";
// import { images } from "../images";

const CourseCard = ({ imageUrl, header, description, rating, review }) => {
  return (
    <div className="course-card-container">
      <div className="image-container">
        <img src={imageUrl} alt={header} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        {/* <div className="rating-review">
            <div className="rating-container">
                <span className="rating">{rating}</span>
                <img src={images['rating-star.svg']} alt='rating-star' className="rating-star" />
            </div>
            <span className="review">{review} Reviews</span>
        </div> */}
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default memo(CourseCard);
