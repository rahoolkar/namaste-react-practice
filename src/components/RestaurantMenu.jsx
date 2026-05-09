import { useParams } from "react-router-dom"; // {resId}
import MenuShimmer from "./MenuShimmer.jsx";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu.js";

function RestaunrantMenu() {
  const { resId } = useParams();

  const restaunrantMenuData = useRestaurantMenu(resId);

  if (Object.keys(restaunrantMenuData).length == 0) {
    return <MenuShimmer></MenuShimmer>;
  }

  const { name, cuisines, avgRating, totalRatingsString } =
    restaunrantMenuData?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="body">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>
        {avgRating} - {totalRatingsString}
      </p>
      <h2>--------MENU----------</h2>
      <ol>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Momos</li>
        <li>Sandwiches</li>
      </ol>
    </div>
  );
}

export default RestaunrantMenu;
