import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo/euforia-logo.png";
import "./EuforiaDemo.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import imgA from "../../assets/banner/main-banner1.jpg";
import imgB from "../../assets/banner/main-banner2.jpg";
import imgC from "../../assets/banner/main-banner3.jpg";
import Slider from "../../features/slider/Slider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const EuforiaDemo = () => {
  const imgArr = [imgA, imgB, imgC];
  return (
    <div>
      <div className="navbar">
        <img src={img} alt="logo" className="logo" />
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Clothes
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Men
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Women
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Designers
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
        <span className="nav-icon">
          <SearchIcon />
        </span>
        <span className="nav-icon">
          <PersonOutlineOutlinedIcon />
        </span>
        <span className="nav-icon">
          <LocalMallOutlinedIcon />
        </span>
      </div>
      <Slider images={imgArr} />
      <div>
        <div className="background-circle">
          <LocalShippingIcon />
        </div>
        <h6>Free Shipping WorldWide</h6>
        <p>On oreder over 100$</p>
      </div>
    </div>
  );
};

export default EuforiaDemo;
