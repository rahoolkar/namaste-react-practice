import { Link } from "react-router-dom";

import RestaurantCard, { restaurantCardWithVegLabel } from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import Carousel from "./Carousel";
import CarouselShimmer from "./CarouselShimmer";
import useAllRestaurantList from "../utils/hooks/useAllRestaurantList";

function Body() {
  const { listOfRestaurants, carouselItems } = useAllRestaurantList();

  const RestaurantCardWithVegLabel = restaurantCardWithVegLabel(RestaurantCard);

  if (listOfRestaurants.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1200px] px-4 py-8">
          <CarouselShimmer />
        </div>

        <div className="mx-auto max-w-[1200px] px-4">
          <ShimmerContainer />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="mb-10 flex items-center justify-between">
          <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-[#3d4152] shadow-sm transition hover:border-[#fc8019] hover:text-[#fc8019]">
            Top Rated Restaurants
          </button>
        </div>

        <section className="mb-12">
          <Carousel items={carouselItems} />
        </section>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#282c3f]">
              Top restaurant chains in your city
            </h2>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {listOfRestaurants.map((restaurant) => {
              return (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurants/${restaurant.info.id}`}
                  className="group"
                >
                  <div className="transition duration-300 group-hover:scale-[0.97]">
                    {restaurant?.info?.veg ? (
                      <RestaurantCardWithVegLabel resData={restaurant} />
                    ) : (
                      <RestaurantCard resData={restaurant} />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Body;
