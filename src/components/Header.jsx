function Header() {
  return (
    <div className="outer-header-container">
      <div className="header">
        <div className="first-half-header">
          <div className="app-logo">
            <img
              className="swiggy-app-logo-image"
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png?_=20201024153532"
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
        </div>
      </div>
    </div>
  );
}

export default Header;