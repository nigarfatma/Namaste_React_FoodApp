import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // let DataOfRestaurant = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "65798",
  //       name: "Leon's - Burgers & Wings (Leon Grill)",
  //       cloudinaryImageId: "r4ufflqojich0r29efvc",
  //       cuisines: [
  //         "American",
  //         "Snacks",
  //         "Turkish",
  //         "Portuguese",
  //         "Continental",
  //       ],
  //       costForTwo: 30000,
  //       deliveryTime: 31,
  //       avgRating: "3.3",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "65797",
  //       name: "Arsalan Biryani",
  //       cloudinaryImageId: "r4ufflqojich0r29efvc",
  //       cuisines: [
  //         "American",
  //         "Snacks",
  //         "Turkish",
  //         "Portuguese",
  //         "Continental",
  //       ],
  //       costForTwo: 30000,
  //       deliveryTime: 31,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "65788",
  //       name: "Royal",
  //       cloudinaryImageId: "r4ufflqojich0r29efvc",
  //       cuisines: [
  //         "American",
  //         "Snacks",
  //         "Turkish",
  //         "Portuguese",
  //         "Continental",
  //       ],
  //       costForTwo: 30000,
  //       deliveryTime: 31,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];
  // this is array destructing
  // const  arr=useState(MENU_DATA)
  // const [ListOfRestaurant, setListOfRestaurant]=arr
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const RestaurantCarPromoted = withPromotedLabel(ResturantCard);
  // Local state variable - super powerful variable
  useEffect(() => {
    fetchData();
    console.log("use Effect");
  }, []);
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    // console.log(
    //   "gdgdg",
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2]
    //     .info
    // );
    console.log("filteredRestaurant", filteredRestaurant);
    // optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like you're offline!! pLease check your internet connection{" "}
      </h1>
    );
  }
  // Conditional Rendering
  // if (ListOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  // Normal js Variable
  const { setUsername, loggedInUser } = useContext(UserContext);
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 ">
            <input
              type="text"
              data-testid="searchId"
              className="search-box border  border-solid border-black focus:ring-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                // filter the restaurant cards and update the UI
                // search text
                console.log("searchText", searchText);
                const filterRestaruant = ListOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filterRestaruant);
              }}
            >
              Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center ">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filterOfResturant = ListOfRestaurant.filter(
                  (res) =>
                    // filter logic
                    res.info.avgRating > 4.2
                );
                setListOfRestaurant(filterOfResturant);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="m-4 p-4 flex items-center ">
            <label htmlFor="">UserName:</label>
            <input
              type="text"
              value={loggedInUser}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black p-2"
            />
          </div>
        </div>
        <div className="resturant-container flex flex-wrap">
          {/* <ResturantCard MENU_DATA={MENU_DATA} /> */}
          {/* {MENU_DATA.map((restaurantItem) => (
            <ResturantCard
              key={restaurantItem.data.id}
              MENU_DATA={restaurantItem}
            />
          ))} */}
          {filteredRestaurant.map((restaurantItem) => (
            <Link to={`/restaurants/${restaurantItem.info.id}`}>
              {" "}
              {/* if the restaurant is promoted then add a promoted label to it */}
              {/* {restaurantItem.data.promoted ? (
                <RestaurantCarPromoted MENU_DATA={restaurantItem} />
              ) : (
                <ResturantCard
                  // key={restaurantItem.data.id}
                  // key={restaurantItem.info.id}
                  MENU_DATA={restaurantItem}
                />
              )} */}
              <ResturantCard
                // key={restaurantItem.data.id}
                // key={restaurantItem.info.id}
                MENU_DATA={restaurantItem}
              />
            </Link>
          ))}
          {/* <ResturantCard
                resName="Arsalan"
                cuising="Biryani,Asian"
                rating="4.3 rating"
                time="32 minute"
              /> */}
        </div>
      </div>
    </>
  );
};
export default Body;
