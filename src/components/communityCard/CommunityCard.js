import React, { memo } from "react";
import "./communityCard.css";

const CommunityCard = ({ imageUrl, header, description, username, designation, userPic, postTime }) => {
  return (
    <div className="community-card-container">
        <div className="user-container">
            <div className="user-icon">
                <img src={userPic} alt='user-icon' className="icon-image" />
            </div>
            <div className="user-details">
                <div className="user-header">
                    <div className="user-name">{username}</div>
                    <div className="post-details">
                        Posted on {postTime} hours ago
                    </div>
                </div>
                <div className="user-designation">{designation}</div>
            </div>
        </div>
        {imageUrl && <div className="image-container">
            <img src={imageUrl} alt={header} className="card-image" />
        </div>}
        <div className="card-content">
            <h2 className="card-header">{header}</h2>
            <p className="card-desc">{description}</p>
        </div>
    </div>
  );
};

export default memo(CommunityCard);
