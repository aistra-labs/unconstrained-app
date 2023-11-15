/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import "./resources.css";
import { images } from "../../components/images";
import data, { resourceResultData } from './data';
import { useSelector } from "react-redux";

function getCuratedTools(token, successCb) {
  fetch("https://dev.api.unconstrained.work/curated-tools", { headers: { token } })
    .then(response => response.json())
    .then(result => successCb(result?.['curatedTools']))
    .catch(error => {
      console.log('error', error);
    });
}

const Resources = () => {
  const userData = useSelector((state) => state.user.userData);
  const [curatedData, setCuratedData] = useState();

  useEffect(() => {
    if(userData?.token) {
      getCuratedTools(userData?.token, setCuratedData);
    }
  }, [userData?.token]);
  return (
    <div className="resources-container">
      <div className="resources-top">
        <div className="resources-title">
          Curated Tools and Resources
        </div>
        <div className="resources-content">
          {data?.map((card, i) => {
            return (
              <div key={i} className="resource-card">
                <div className="card-top">
                  <div className="icon-container">
                    <img className="card-image" src={card.imageLink} loading="lazy" alt="card-icon" />
                  </div>
                  <div className="icon-heading">{card.name}</div>
                </div>
                <div className="card-bottom">
                  <div className="card-title">
                    Resource you're looking for:

                    <span> 
                      <img src={images['clear-icon.svg']} loading="lazy" alt="clear-icon" />
                      Clear All
                    </span>
                  </div>
                  <div className="resources-list-container">
                    {card.list.map((res, k) => {
                      return (
                        <div key={k} className = {`resource ${ res.isSelected ? 'higlight-border' : ''}`}>
                          {res.platform}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="resources-bottom">
        <div className="resources-bottom-container">
          <div className="resources-results-title">
            Resources/tools  results
          </div>
          {
            curatedData?.map((resource) => {
              return (
                <div className="resource-result-card">
                  <img className="resource-result-image" src={resource.imageLink} loading="lazy" alt="card-icon" />
                  <div>
                    <div className="resource-result-card-title">
                      {resource.name}
                    </div>
                    <a href={resource.url} className="resource-result-card-url" target="_blank" rel="noreferrer">
                      {resource.url}
                    </a>
                  </div>
                  <img src={images['chevron-right.svg']} loading="lazy" alt="right arrow button" />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default memo(Resources);
