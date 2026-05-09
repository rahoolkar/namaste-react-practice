import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../constant.js";

function useRestaurantMenu(restaurantId) {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState({});

  useEffect(() => {
    fetchMenuData();
  }, []);

  async function fetchMenuData() {
    try {
      const response = await fetch(RESTAURANT_MENU_API + restaurantId);
      const json = await response.json();
      setRestaurantMenuInfo(json);
    } catch (error) {
      console.log(error);
    }
  }

  return restaurantMenuInfo;
}

export default useRestaurantMenu;
