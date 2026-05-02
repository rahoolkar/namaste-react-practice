import { useParams } from "react-router-dom"; // {resId}
import MenuShimmer from "./MenuShimmer.jsx";
import { useEffect, useState } from "react";

function RestaunrantMenu() {
  const [menuData, setMenuData] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  if (Object.keys(menuData).length == 0) {
    return <MenuShimmer></MenuShimmer>;
  }

  async function fetchMenuData() {
    const response = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await response.json();
    setMenuData(json);
    console.log(json);
  }

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    menuData?.data?.cards[2]?.card?.card?.info;

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
