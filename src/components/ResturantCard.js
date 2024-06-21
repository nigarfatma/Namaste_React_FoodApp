import React from "react";
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ MENU_DATA }) => {
  console.log("MENU_DATA", MENU_DATA);

  // Destructure properties from MENU_DATA.data
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    MENU_DATA?.info;
  // const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
  // MENU_DATA?.data;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      {/* <h4>Cost for two: ₹{costForTwo / 100}</h4> */}
      <h4>Cost for two: {costForTwo}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>deliveryTime: {sla?.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
