import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./RestaurantCard.css";
import { FaStar } from "react-icons/fa";

function Header() {
  return (
    <div className="outer-header-container">
      <div className="header">
        <div className="first-half-header">
          <div className="app-logo">
            <img className="swiggy-app-logo-image" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png?_=20201024153532"></img>
          </div>
          <div className="change-location">
            <h4 className="current-location">Other</h4>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="second-half-header">
          <div className="nav-items">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="nav-items-text">Search</span>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-tag"></i>
            <span className="nav-items-text">Offers</span>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-life-ring"></i>
            <span className="nav-items-text">Help</span>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-circle-user"></i>
            <span className="nav-items-text">Sign In</span>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="nav-items-text">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./RestaurantCard.css";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ data }) => {
  const {
    name,
    image,
    rating,
    time,
    cuisine,
    location,
  } = data;

  return (
    <div className="restaurant-card">

      {/* Image */}
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />

        {/* Gradient overlay */}
        <div className="image-overlay"></div>

        {/* Delivery time badge */}
        <span className="time-badge">{time} mins</span>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>

        <div className="card-info">
          <span className="rating">
            <FaStar /> {rating}
          </span>
          <span className="dot">•</span>
          <span>{time} mins</span>
        </div>

        <p className="cuisine">{cuisine}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
