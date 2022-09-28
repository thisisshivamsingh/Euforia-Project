import React from "react";
import img from "../../assets/logo/euforia-logo.png";
import imgA from "../../assets/header/header.jpg";
import imgB from "../../assets/inner/inner.png";
import imgC from "../../assets/magento_themes/magento-themeA.jpg";
import imgD from "../../assets/magento_themes/magento-themeB.jpg";
import imgE from "../../assets/magento_themes/magento-themeC.jpg";
import imgF from "../../assets/layouts/web1.png";
import imgG from "../../assets/layouts/web2.png";
import imgH from "../../assets/layouts/web3.png";
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
      <div className="scroll-list">
        <div className="scroll-item">
          <button className="button">Purchase Now</button>
          <button className="button">View Demo</button>
        </div>

        <div className="scroll-item">
          <button className="button">Purchase Now</button>
          <button className="button">View Demo</button>
        </div>

        <div className="scroll-item">
          <button className="button">Purchase Now</button>
          <button className="button">View Demo</button>
        </div>
      </div>
      <div className="layouts-names">
        <h3 className="layout-name">FASHION</h3>
        <h3 className="layout-name">ELECTRONIC</h3>
        <h3 className="layout-name">JEWELLERY</h3>
      </div>
      <button className="purchase-now-btn">
        <span className="purchase-now-text">Purchase Now!</span>
      </button>
      <h1 className="creating-website-today">
        Start Creating Your Website Today With
      </h1>
      <h1 className="euforia-theme-now">Euforia Theme Now</h1>
      <div className="best-selling-magento-themes">
        <img src={imgB} alt="inner" />
        <h1>OUR BEST SELLING MAGENTO THEMES</h1>
        <div className="magento-themes">
          <div className="magento-theme">
            <img
              src={imgC}
              alt="magento-themeA"
              className="magento-theme-img"
            />
            <button className="magento-theme-btn">
              <span className="magento-theme-text">Buy Now</span>
            </button>
          </div>
          <div className="magento-theme">
            <img
              src={imgD}
              alt="magento-themeB"
              className="magento-theme-img"
            />
            <button className="magento-theme-btn">
              <span className="magento-theme-text">Buy Now</span>
            </button>
          </div>
          <div className="magento-theme">
            <img
              src={imgE}
              alt="magento-themeC"
              className="magento-theme-img"
            />
            <button className="magento-theme-btn">
              <span className="magento-theme-text">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <p className="rights-reserved">
        @2016 Euforia theme. All rights reserved. Magento themes by
        <span className="best-magneto-theme"> bestmagentotheme</span>
      </p>
    </>
  );
};

export default Home;
