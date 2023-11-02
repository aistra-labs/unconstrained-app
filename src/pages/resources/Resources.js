/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import "./resources.css";
import { images } from "../../components/images";
// import data from './data';

const Resources = () => {

  return (
    <div className="resources-container">
      <div className="resources-top">
        <div className="resources-title">
          Curated Tools and Resources
        </div>
        Coming Soon...
        <img className="banner-image" src={images['curated_tools.png']} loading="lazy" alt="curated_tools" />
        {/* <div className="resources-content">
          {data.map((card, i) => {
            return (
              <div key={i} className="resource-card">
                <div className="card-top">
                  <div className="icon-container">
                    <img className="card-image" src={card.imageUrl} loading="lazy" alt="card-icon" />
                  </div>
                  <div className="icon-heading">{card.title}</div>
                </div>
                <div className="card-bottom">
                  <div className="card-title">Resource you're looking for:</div>
                  <div className="resources-list-container">
                    {card.list.map((res, k) => {
                      return (
                        <div key={k} className="resource">
                          {res}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  );
};

export default memo(Resources);
