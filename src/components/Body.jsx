import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer.jsx";
import { SWIGGY_API } from "../utils/constant.js";

function Body() {
  const [restaurantListCards, setRestaurantListCards] = useState([]);

  function filterTopRatedRestaursnts() {
    const filteredRestaurants = restaurantListCards.filter((restaurant) => {
      return restaurant.info.avgRating > 4;
    });
    setRestaurantListCards(filteredRestaurants);
  }

  useEffect(function () {
    getSwiggyData();
  }, []); //useffect callback is called after the component is rendered fully

  async function getSwiggyData() {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();

      setRestaurantListCards(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  if (restaurantListCards.length == 0) {
    return <ShimmerContainer></ShimmerContainer>;
  }

  return (
    <div className="body">
      <div className="restaunrant-card-filter">
        <button
          className="top-rated-filter-btn"
          onClick={filterTopRatedRestaursnts}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-card-container">
        {restaurantListCards.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            ></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
