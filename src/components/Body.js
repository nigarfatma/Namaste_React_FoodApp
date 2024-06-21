import ResturantCard from "./ResturantCard";
import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    console.log(
      "gdgdg",
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2]
        .info
    );
    // optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Conditional Rendering
  // if (ListOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  // Normal js Variable
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
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
          <button
            className="filter-btn"
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
        <div className="resturant-container">
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
