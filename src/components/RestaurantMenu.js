import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategorie from "./RestaurantCategorie";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // props drilling
  const dummy = "dummy data";
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

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
  // console.log(
  //   "hghj",
  //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const { itemCards } = infoCards;
  // Show categories
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // const handleToggle = (index) => {
  //   if (showIndex === index) {
  //     setShowIndex(null); // Collapse if the same category is clicked
  //   } else {
  //     setShowIndex(index); // Open the selected category
  //   }
  // };
  // console.log("categories", categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu text-center">
        <h3 className="font-bold my-6 text-2xl">{name}</h3>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {/* <h2>Menu</h2>
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
        </ul> */}
        {/* <ul>
          {itemCards.map((item, index) => (
            <li>{item.card.info.name}</li>
          ))}
        </ul> */}
        {/* categories accordians */}
        {categories.map((categorie, index) => (
          //     {/* Controlled Component */}

          <RestaurantCategorie
            key={categorie?.card?.card.title}
            data={categorie?.card?.card}
            dummy={dummy}
            // showItems={index === showIndex ? true : false}
            showItems={index === showIndex}
            // setShowIndex={() => setShowIndex(index)}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }

            // setShowIndex={() => handleToggle(index)}
          />
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
