/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
// import Header from "./Header";
// import axios from "axios";
import "./home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getInfo } from "../Actions/Actions";


const Home = () => {

  return (
    <div className="home">
      {/* <Header /> */}
      <div className="home-header">
        Home Body
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default memo(Home);
