/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import "./resources.css";
import { images } from "../../components/images";
// import data from './data';
import { useDispatch, useSelector } from "react-redux";
import { processResponse } from "../../utils";

function getCuratedTools(token, successCb, dispatch) {
  fetch("https://dev.api.unconstrained.work/curated-tools", { headers: { token } })
    .then(response => processResponse(response, dispatch))
    .then(result => successCb(result?.['curatedTools']))
    .catch(error => {
      console.log('error', error);
    });
}

// function clearAll(name, resourceData, setResourceData) {
//   const newData = resourceData.map(el => {
//     if (el.name === name) {
//       el.list = el.list.map(item => ({ ...item, isSelected: false }));
//     }
//     return el;
//   })
//   setResourceData(newData)
// }

const Resources = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [curatedData, setCuratedData] = useState();
  // const [resourceData, setResourceData] = useState(data);

  useEffect(() => {
    if (userData?.token) {
      getCuratedTools(userData?.token, setCuratedData, dispatch);
    }
  }, [userData?.token]);
  return (
    <div className="resources-container">
      <div className="resources-top">
        <div className="resources-title">
          Curated Tools and Resources
        </div>
        {/* <div className="resources-content">
          {resourceData?.map((card, i) => {
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
                    {card.list.filter(el => el?.isSelected).length > 0 ? <button onClick={() => clearAll(card.name, resourceData, setResourceData)} className="clear-all">
                      <img src={images['clear-icon.svg']} loading="lazy" alt="clear-icon" />
                      Clear All
                    </button> : null}
                  </div>
                  <div className="resources-list-container">
                    {card.list.map((res, k) => {
                      return (
                        <div key={k} className={`resource ${res.isSelected ? 'higlight-border' : ''}`}>
                          {res.platform}
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
      <div className="resources-bottom">
        <div className="resources-bottom-container">
          {/* <div className="resources-results-title">
            Resources/tools  results
          </div> */}
          {
            curatedData?.map((resource) => {
              return (
                <a href={resource.url} key={`key_${resource.url}`} className="resource-result-card-url" target="_blank" rel="noreferrer">
                  <div className="resource-result-card">
                    <img className="resource-result-image" src={resource.imageLink} loading="lazy" alt="card-icon" />
                    <div className="card-cont">
                      <div className="resource-result-card-title">
                        {resource.name}
                      </div>
                      {/* {resource.url} */}
                    </div>
                    <img src={images['chevron-right.svg']} loading="lazy" alt="right arrow button" />
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default memo(Resources);
