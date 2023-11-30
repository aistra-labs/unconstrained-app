/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import "./resources.css";
import { images } from "../../components/images";
import { useDispatch, useSelector } from "react-redux";
import { getCuratedToolFilters, getCuratedTools } from "./actions";
import ProdCard from "../../components/curatedToolResCard";


const Resources = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [curatedData, setCuratedData] = useState();
  const [filterData, setFilterData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (userData?.token) {
      getCuratedToolFilters(userData?.token, setFilterData, dispatch);

    }
  }, [userData?.token]);

  useEffect(() => {
    let body = {};
    selectedFilters.forEach(el => {
      body = { ...body, [el[0]]: [...(body?.[el[0]] || []), el[1]] }
    })
    getCuratedTools(userData?.token, setCuratedData, body, dispatch);
  }, [selectedFilters])

  function clearAll(key) {
    setSelectedFilters(selectedFilters.filter(el => el[0] !== key));
    const newData = filterData?.map(el => {
      if (el.key === key) {
        el.list = el.list.map(item => ({ ...item, isSelected: false }));
      }
      return el;
    })
    setFilterData(newData)
  }
  function selectFilter(category, value) {
    let deSelected = false;
    setFilterData(filterData.map(el => {
      if (el?.key === category) {
        el.list = el.list.map(option => {
          if (option.platform === value) {
            if (option.isSelected) deSelected = true;
            option.isSelected = !option.isSelected;
          }
          return option;
        })
      }
      return el;
    }));
    if (deSelected) {
      setSelectedFilters(selectedFilters.filter(el => !(el[0] === category && el[1] === value)));
    } else {
      setSelectedFilters([...selectedFilters, [category, value]]);
    }
  }

  return (
    <div className="resources-container">
      <div className="resources-top">
        <div className="resources-title">
          Curated Tools and Resources
        </div>
        <div className="resources-content">
          {filterData?.map((card, i) => {
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
                    {card.list.filter(el => el?.isSelected).length > 0 ? <button onClick={() => clearAll(card.key)} className="clear-all">
                      <img src={images['clear-icon.svg']} loading="lazy" alt="clear-icon" />
                      Clear All
                    </button> : null}
                  </div>
                  <div className="resources-list-container frame">
                    {card.list.map((res, k) => {
                      return (
                        <button className="resource-btn" onClick={() => selectFilter(card.key, res.platform)}>
                          <span key={k} className={`resource ${res.isSelected ? 'higlight-border' : ''}`}>
                            {res.platform}
                          </span>
                        </button>
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
          <ProdCard data={curatedData} />
        </div>
      </div>
    </div>
  );
};

export default memo(Resources);
