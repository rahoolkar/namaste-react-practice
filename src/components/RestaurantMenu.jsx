import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const restaurantMenuData = useRestaurantMenu(resId);

  if (Object.keys(restaurantMenuData).length === 0) {
    return <MenuShimmer />;
  }

  const restaurantInfo = restaurantMenuData?.data?.cards[2]?.card?.card?.info;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    areaName,
  } = restaurantInfo;

  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-20">
      <div className="mx-auto max-w-[850px] px-4 py-8">
        <p className="mb-8 text-sm text-gray-500">Home / {name}</p>

        <section>
          <h1 className="text-3xl font-extrabold text-[#282c3f]">{name}</h1>

          <p className="mt-2 text-sm font-medium text-[#fc8019]">
            {cuisines.join(", ")}
          </p>

          <p className="mt-1 text-sm text-gray-500">{areaName}</p>

          <div
            className="
              mt-6
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-green-700
                  text-white
                "
              >
                <FaStar className="text-[11px]" />
              </div>

              <span className="font-bold text-[#02060c]">{avgRating}</span>

              <span className="text-gray-400">•</span>

              <span className="font-bold text-[#02060c]">
                {totalRatingsString}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-[#535665]">
              <p>
                <span className="font-semibold text-[#02060c]">Cost:</span>{" "}
                {costForTwoMessage}
              </p>

              <p>
                <span className="font-semibold text-[#02060c]">
                  Delivery Time:
                </span>{" "}
                {sla?.deliveryTime} mins
              </p>
            </div>
          </div>
        </section>

        <div className="my-10 flex items-center justify-center">
          <div className="h-[1px] flex-1 bg-gray-300"></div>

          <span className="mx-4 text-sm font-bold tracking-[4px] text-gray-500">
            MENU
          </span>

          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>
      </div>
    </main>
  );
}

export default RestaurantMenu;
