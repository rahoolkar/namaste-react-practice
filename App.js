import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import { FaStar } from "react-icons/fa";

const data = {
  name: "Pizza Hut",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e59b5860-65b7-4946-a158-9bfb6f1f7c6b_435686.JPG",
  locality: "SCO36, Ground Floor",
  areaName: "Sector-19",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas"],
  avgRating: 4.3,
  parentId: "721",
  avgRatingString: "4.3",
  totalRatingsString: "2.4K+",
  sla: {
    deliveryTime: 20,
    lastMileTravel: 0.6,
    serviceability: "SERVICEABLE",
    slaString: "15-20 mins",
    lastMileTravelString: "0.6 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2026-04-15 04:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "50% OFF",
    discountTag: "FLAT DEAL",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "3.4",
      ratingCount: "633",
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  },
};

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

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, sla, areaName, cloudinaryImageId } =
    resData;
  return (
    <div className="restaurant-card">
      <div className="card-image-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="card-image"
          className="card-image"
        />
      </div>

      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>

        <div className="card-info">
          <span className="rating">
            <FaStar /> {avgRating}
          </span>
          <span className="dot">•</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p className="cuisine">{cuisines}</p>
        <p className="location">{`${areaName}`}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header></Header>
      <RestaurantCard resData={data}></RestaurantCard>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
