import { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function Search() {
  const [inputText, setInputText] = useState("");

  const [restaurantListCards, setRestaurantListCards] =
    useState(restaurantList);

  const allRestaurants = restaurantList;

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleButtonSearch() {
    const filteredRestaurants = allRestaurants.filter((restaurant) => {
      return (
        restaurant?.info?.name
          .toLowerCase()
          .includes(inputText.toLowerCase()) ||
        restaurant?.info?.cuisines
          .join("")
          .toLowerCase()
          .includes(inputText.toLowerCase())
      );
    });
    setRestaurantListCards(filteredRestaurants);
  }

  return (
    <div className="search-container">
      <div className="input-container">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button className="search-btn" onClick={handleButtonSearch}>
          Search
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

export default Search;