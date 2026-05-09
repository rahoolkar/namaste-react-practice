import { useState, useEffect } from "react";
import { SWIGGY_API } from "../constant";
import { restaurantList, carouselImagesList } from "../mockData.js";

function useAllRestaurantList() {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [carouselItems, setCarouselItems] = useState(carouselImagesList);

  useEffect(function () {
    fetchBodyData();
  }, []);

  async function fetchBodyData() {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarouselItems(
        json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.log(error);
    }
  }

  return { listOfRestaurants, carouselItems };
}

export default useAllRestaurantList;
