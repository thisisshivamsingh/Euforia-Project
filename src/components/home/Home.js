import React from "react";
import img from "../../assets/logo/euforia-logo.png";
import imgA from "../../assets/header/header.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <img src={img} alt="logo" className="logo" />
        <p className="logo-right-text">
          Creative design, ultimate core features and ease of customization
        </p>
      </div>
      <img src={imgA} alt="header" className="header" />
      <h1 className="choose-your-demo">Choose Your Demo</h1>
      <p className="homepage-layouts">3 Homepage Layouts</p>
      <div className="layouts">
        <div className="layout"></div>
        <div className="layout"></div>
        <div className="layout"></div>
      </div>
    </>
  );
};

export default Home;
