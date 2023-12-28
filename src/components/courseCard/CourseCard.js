import React, { memo, useState } from "react";
import "./courseCard.css";
import { URLS } from "../../urls";
import { useSelector } from "react-redux";
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

function checkout(productId, token, setLoading) {
  const url = URLS.CHECKOUT(productId);
  setLoading(true);
  fetch(url, {
    headers: {
      token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: 'POST'
  }).then(res => res.json()).then(res => {
    window.location.assign(res.checkOutUrl);
  })
    .finally(setLoading(false));
}

export const BuyCourseCard = ({ imageUrl, header, description, productId, isPurchased }) => {
  const token = useSelector((state) => state.user.userData?.token);
  const [loading, setLoading] = useState(false);
  return (
    <div className="course-card-container">
      <div className="image-container">
        <img src={imageUrl} alt={header} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-header">{header}</h2>
        <p className="card-desc">{description}</p>
        {
          loading ?
            <div class="spinner"></div>
            : isPurchased ? <div className="purchased-txt">Purchased</div> :
              <button className="buy-now-btn" onClick={() => checkout(productId, token, setLoading)}>Buy Now</button>
        }

      </div>
    </div>
  );
};

export default memo(CourseCard);
