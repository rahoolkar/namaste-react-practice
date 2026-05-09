import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer.jsx";
import Carousel from "./Carousel.jsx";
import CarouselShimmer from "./CarouselShimmer.jsx";
import { Link } from "react-router-dom";
import useAllRestaurantList from "../utils/hooks/useAllRestaurantList.js";

function Body() {
  function filterTopRatedRestaursnts() {
    const filteredRestaurants = restaurantListCards.filter((restaurant) => {
      return restaurant.info.avgRating > 4;
    });
    setRestaurantListCards(filteredRestaurants);
  }

  const { listOfRestaurants, carouselItems } = useAllRestaurantList();

  if (listOfRestaurants.length == 0) {
    return (
      <div className="shimmer-body">
        <div>
          <CarouselShimmer></CarouselShimmer>
        </div>
        <div>
          <ShimmerContainer></ShimmerContainer>;
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="restaurant-card-filter">
        <button
          className="top-rated-filter-btn"
          onClick={filterTopRatedRestaursnts}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="whats-on-your-mind">
        <Carousel items={carouselItems}></Carousel>
      </div>

      <div className="restaurant-card-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard resData={restaurant}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
