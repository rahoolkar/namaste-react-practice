import { FaStar } from "react-icons/fa6";
import { CLOUDINARY_IMAGES_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, sla, areaName, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <div className="card-image-container">
        <img
          src={CLOUDINARY_IMAGES_LINK + cloudinaryImageId}
          alt="card-image"
          className="card-image"
        />
      </div>

      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>

        <div className="card-info">
          <span className="rating">
            <FaStar /> {avgRating}
          </span>
          <span className="dot">•</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p className="cuisine">{cuisines.join(", ")}</p>
        <p className="location">{`${areaName}`}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
