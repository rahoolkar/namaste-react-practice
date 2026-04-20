import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function Body() {
  return (
    <div className="body">
      <div className="restaunrant-card-filter"></div>
      <div className="restaurant-card-container">
        {restaurantList.map((restaurant, index) => {
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
