import { SWIGGY_HEADER_LOGO } from "../utils/constant";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <div className="outer-header-container">
      <div className="header">
        <div className="first-half-header">
          <div className="app-logo">
            <img
              className="swiggy-app-logo-image"
              src={SWIGGY_HEADER_LOGO}
            ></img>
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
          <div>
            <LoginButton></LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
