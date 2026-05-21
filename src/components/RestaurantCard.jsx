import { FaStar } from "react-icons/fa6";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, sla, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      className="
        w-full
        cursor-pointer
        rounded-2xl
        bg-white
        transition
        duration-300
        hover:scale-[0.97]
      "
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={CLOUDINARY_IMAGES_LINK + cloudinaryImageId}
          alt={name}
          className="
            h-55
            w-full
            rounded-2xl
            object-cover
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        ></div>

        {/* Delivery Time Badge */}
        <div
          className="
            absolute
            bottom-3
            left-3
            rounded-md
            bg-white
            px-2
            py-1
            text-sm
            font-bold
            text-[#1b1e24]
            shadow-md
          "
        >
          {sla?.deliveryTime} mins
        </div>
      </div>

      {/* Content Section */}
      <div className="px-2 py-3">
        {/* Restaurant Name */}
        <h3
          className="
            truncate
            text-lg
            font-extrabold
            text-[#02060c]
          "
        >
          {name}
        </h3>

        {/* Rating + Delivery */}
        <div
          className="
            mt-1
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#02060c]
          "
        >
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-green-700
                text-white
              "
            >
              <FaStar className="text-[10px]" />
            </div>

            <span>{avgRating}</span>
          </div>

          <span className="text-gray-400">•</span>

          <span>{sla?.deliveryTime} mins</span>
        </div>

        {/* Cuisines */}
        <p
          className="
            mt-2
            truncate
            text-sm
            text-[#676a6d]
          "
        >
          {cuisines.join(", ")}
        </p>

        {/* Area */}
        <p
          className="
            mt-1
            text-sm
            text-[#676a6d]
          "
        >
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

function restaurantCardWithVegLabel(RestaurantCard) {
  return function ({ resData }) {
    return (
      <div className="relative">
        <label
          className="absolute
      left-3
      top-3
      rounded-md
      bg-green-600
      px-2
      py-1
      text-xs
      font-bold
      text-white"
        >
          Veg
        </label>
        <RestaurantCard resData={resData}></RestaurantCard>
      </div>
    );
  };
}

export { restaurantCardWithVegLabel };
