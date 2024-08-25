import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResturantCard = ({ MENU_DATA }) => {
  // console.log("MENU_DATA", MENU_DATA);

  // Destructure properties from MENU_DATA.data
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    MENU_DATA?.info;
  const { loggedInUser } = useContext(UserContext);
  // const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
  // MENU_DATA?.data;
  return (
    <div
      data-testid="rescard"
      className="m-4 p-4 w-48 rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      {/* <h4>Cost for two: ₹{costForTwo / 100}</h4> */}
      <h4>Cost for two: {costForTwo}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>deliveryTime: {sla?.slaString}</h4>
      <h4>user:{loggedInUser}</h4>
    </div>
  );
};

// Highe order Component
// Input -RestaurantCard==> RestaurantCarPromoted
// export const withPromotedLabel = (ResturantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
//         <ResturantCard {...props} />
//       </div>
//     );
//   };
// };

export default ResturantCard;
