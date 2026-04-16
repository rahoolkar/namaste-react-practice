import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import { FaStar } from "react-icons/fa";

const restaurantList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "881131",
      name: "Khao Aur Khane Do",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/d6b481fa-3fb0-4390-a4da-9b99d3e660dc_881131 (1).jpg",
      locality: "Sector 21C",
      areaName: "East Chd",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Street Food", "Beverages", "Indian"],
      avgRating: 4.7,
      veg: true,
      parentId: "516640",
      avgRatingString: "4.7",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 17:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹35",
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
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/khao-aur-khane-do-sector-21c-east-chd-rest881131",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "511967",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/258b6f78-0eed-4f85-bf36-1e932482c0c3_511967.JPG",
      locality: "Sector 8",
      areaName: "Sector 8",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.5,
      parentId: "2682",
      avgRatingString: "4.5",
      totalRatingsString: "710",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
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
          rating: "4.5",
          ratingCount: "632",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/blue-tokai-coffee-roasters-sector-8-rest511967",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "54214",
      name: "Hoshiarpuria 3b2",
      cloudinaryImageId: "ujcki60xhet1ghlb4rga",
      locality: "Phase 3",
      areaName: "Phase 3 Mohali",
      costForTwo: "₹150 for two",
      cuisines: [
        "Sweets",
        "Snacks",
        "Chinese",
        "Fast Food",
        "Burgers",
        "indian snacks",
        "Indian",
        "North Indian",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "97041",
      avgRatingString: "4.3",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
          rating: "3.8",
          ratingCount: "1.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/hoshiarpuria-3b2-phase-3-phase-3-mohali-rest54214",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "152381",
      name: "Punjabi Dhaba 35 since 1976",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/8e014736-5a46-4c70-8d2b-793020d4a1ae_152381.jpg",
      locality: "Sector 35",
      areaName: "Sector 35",
      costForTwo: "₹200 for two",
      cuisines: ["Thali", "North Indian", "Punjabi", "Indian", "dessert"],
      avgRating: 4.5,
      veg: true,
      parentId: "737956",
      avgRatingString: "4.5",
      totalRatingsString: "7.3K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
          rating: "3.9",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/punjabi-dhaba-35-since-1976-sector-35-rest152381",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "81041",
      name: "Amrit Sweets Phase 5",
      cloudinaryImageId: "ghemfhdccguwa9bjjzxu",
      locality: "Phase 5",
      areaName: "Phase 5 Mohali",
      costForTwo: "₹250 for two",
      cuisines: [
        "Sweets",
        "Desserts",
        "South Indian",
        "Chinese",
        "Tandoor",
        "fast food",
        "starters",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "643238",
      avgRatingString: "4.6",
      totalRatingsString: "92K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 22:30:00",
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
          rating: "4.2",
          ratingCount: "6.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/amrit-sweets-phase-5-phase-5-phase-5-mohali-rest81041",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "542334",
      name: "Third Wave Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/6e399031-a00d-4686-a2a6-5cf1a469bc5b_542334.JPG",
      locality: "Sector 7",
      areaName: "Sector 7",
      costForTwo: "₹400 for two",
      cuisines: ["Beverages", "Bakery", "Continental"],
      avgRating: 4.6,
      parentId: "274773",
      avgRatingString: "4.6",
      totalRatingsString: "782",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 23:59:00",
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
          rating: "4.7",
          ratingCount: "1.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/third-wave-coffee-sector-7-rest542334",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "40889",
      name: "Delhi Special Pranthe Wali Gali",
      cloudinaryImageId: "maqxts7yxpe9bsekgzq3",
      areaName: "Sector 22",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "South Indian", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "4540",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
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
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/delhi-special-pranthe-wali-gali-sector-22-rest40889",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "68533",
      name: "Vijay Dairy",
      cloudinaryImageId: "jrrxcxw1yvw9yitglfpt",
      locality: "Sector 9",
      areaName: "Sector 9",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Bakery", "Ice Cream"],
      avgRating: 4.8,
      veg: true,
      parentId: "223178",
      avgRatingString: "4.8",
      totalRatingsString: "66K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-04-16 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹30",
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
          rating: "4.2",
          ratingCount: "587",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-9ff69563-ecf7-4802-a852-585a34c64ebc",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/vijay-dairy-sector-9-rest68533",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

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
    resData?.info;
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

        <p className="cuisine">{cuisines.join(", ")}</p>
        <p className="location">{`${areaName}`}</p>
      </div>
    </div>
  );
};

function Body() {
  return (
    <div className="body">
      <div className="restaunrant-card-filter"></div>
      <div className="restaurant-card-container">
        {restaurantList.map((restaurant, index) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
