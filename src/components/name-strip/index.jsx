import React from "react";
import "./style.css";
import { Rating } from 'react-simple-star-rating'

const NameStrip = ({name, image, position, rating}) => {
  return (
    <div className="name-strip">
      <img src={image} alt={'reviewer'} className="reviewer-img" />
      <div className="review-detail">
        <div className="reviewer-name">{name}</div>
        <div className="reviewer-post">{position}</div>
        <Rating
          allowFraction
          initialValue={rating}
          size={24}
          readonly
        />
      </div>
    </div>
  )
}

export default NameStrip;