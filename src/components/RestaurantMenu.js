import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=149560&catalog_qa=undefined&submitAction=ENTER"
  //     MENU_API + resId
  //   );
  //   // note id is 425,229
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  // const { name } = resInfo?.cards[2]?.card?.card?.info;
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, costForTwoMessage, cuisines, avgRating } = info;
  const infoCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const { itemCards } = infoCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h3>{name}</h3>
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {}
              {" Rs"}
              {item.card.info.Price / 100 ||
                item.card.info.defaultPrice / 100 ||
                item.card.info.finalPrice / 100 ||
                item.card.info.price / 100}
            </li>
          ))}
        </ul>
        {/* <ul>
          {itemCards.map((item, index) => (
            <li>{item.card.info.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};
export default RestaurantMenu;
