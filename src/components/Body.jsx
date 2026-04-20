import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const [restaurantListCards, setRestaurantListCards] =
    useState(restaurantList);

  function filterTopRatedRestaursnts() {
    const filteredRestaurants = restaurantListCards.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setRestaurantListCards(filteredRestaurants);
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
