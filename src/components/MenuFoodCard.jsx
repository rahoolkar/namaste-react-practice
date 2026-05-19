import { FaStar } from "react-icons/fa6";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function MenuFoodCard({ data }) {
  const { name, price, defaultPrice, ratings, description, imageId } = data;

  const finalPrice = (price || defaultPrice) / 100;

  console.log(data);

  const dispatch = useDispatch();

  function handleAddButtonClick() {
    //dispatch an action
    dispatch(addItem(data));
  }

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

      <div
        className="
          relative
          flex
          w-full
          justify-center
          md:w-45
        "
      >
        {imageId && (
          <img
            src={CLOUDINARY_IMAGES_LINK + imageId}
            alt={name}
            className="
              h-40
              w-full
              rounded-2xl
              object-cover
              shadow-sm
              md:w-45
            "
          />
        )}

        <button
          className="
            absolute
            -bottom-3
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
          onClick={handleAddButtonClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default MenuFoodCard;
