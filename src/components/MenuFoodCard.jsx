import { FaStar } from "react-icons/fa6";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";

function MenuFoodCard({ data }) {
  const { name, price, defaultPrice, ratings, description, imageId, isVeg } =
    data;

  const finalPrice = (price || defaultPrice) / 100;

  return (
    <div
      className="
        flex
        flex-col
        justify-between
        gap-6
        border-b
        border-gray-200
        py-8
        md:flex-row
        px-4
      "
    >
      <div className="flex-1">
        <h3
          className="
            mt-3
            text-lg
            font-bold
            text-[#02060c]
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2
            text-base
            font-semibold
            text-[#02060c]
          "
        >
          ₹{finalPrice}
        </p>

        {ratings?.aggregatedRating?.rating && (
          <div
            className="
              mt-3
              flex
              items-center
              gap-1
              text-sm
              font-bold
              text-green-700
            "
          >
            <FaStar className="text-xs" />

            <span>{ratings?.aggregatedRating?.rating}</span>

            <span className="text-gray-400">
              ({ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
        )}

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[90%]
            text-sm
            leading-6
            text-[#686b78]
          "
        >
          {description}
        </p>
      </div>

      {/* Right Image Section */}
      <div
        className="
          relative
          flex
          w-full
          justify-center
          md:w-[180px]
        "
      >
        {/* Food Image */}
        {imageId && (
          <img
            src={CLOUDINARY_IMAGES_LINK + imageId}
            alt={name}
            className="
              h-[160px]
              w-full
              rounded-2xl
              object-cover
              shadow-sm
              md:w-[180px]
            "
          />
        )}

        <button
          className="
            absolute
            bottom-[-12px]
            left-1/2
            z-10
            -translate-x-1/2
            rounded-xl
            border
            border-gray-300
            bg-white
            px-8
            py-2
            text-sm
            font-extrabold
            text-[#1ba672]
            shadow-md
            transition
            duration-300
            hover:bg-gray-100
            active:scale-95
          "
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default MenuFoodCard;
