import { useState } from "react";
import { FaSearch } from "react-icons/fa";

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
    const filteredRestaurants = allRestaurants.filter(
      (restaurant) =>
        restaurant?.info?.name
          .toLowerCase()
          .includes(inputText.toLowerCase()) ||
        restaurant?.info?.cuisines
          .join(" ")
          .toLowerCase()
          .includes(inputText.toLowerCase())
    );

    setRestaurantListCards(filteredRestaurants);
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-16">
      {/* Main Container */}
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-[#282c3f]">
            Search for restaurants and food
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Discover your favourite meals near you
          </p>
        </div>

        {/* Search Box */}
        <div
          className="
            flex
            flex-col
            gap-4
            rounded-2xl
            bg-white
            p-4
            shadow-sm
            sm:flex-row
          "
        >
          {/* Input */}
          <div className="relative flex-1">
            <FaSearch
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Search for restaurants or cuisines"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                py-4
                pl-12
                pr-4
                text-sm
                outline-none
                transition
                focus:border-[#fc8019]
                focus:bg-white
              "
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleButtonSearch}
            className="
              rounded-xl
              bg-[#fc8019]
              px-8
              py-4
              text-sm
              font-bold
              text-white
              transition
              duration-300
              hover:bg-[#e46f12]
              hover:scale-[1.02]
              active:scale-95
            "
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        <div className="mt-12">
          {/* Result Heading */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#282c3f]">Restaurants</h2>

            <p className="text-sm text-gray-500">
              {restaurantListCards.length} results found
            </p>
          </div>

          {/* Restaurant Grid */}
          {restaurantListCards.length > 0 ? (
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
              {restaurantListCards.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div
              className="
                mt-20
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                alt="No Results"
                className="h-40 w-40 opacity-80"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#282c3f]">
                No restaurants found
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Try searching for a different restaurant or cuisine
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;