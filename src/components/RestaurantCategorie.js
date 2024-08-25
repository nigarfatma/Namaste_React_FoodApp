import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategorie = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  // console.log("Cdata", data);
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Header */}
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordian Body */}
        {/* {showItems ? <ItemList item={data.itemCards} /> : ""} */}
        {showItems && <ItemList item={data.itemCards} dummy={dummy} />}
      </div>
    </>
  );
};

export default RestaurantCategorie;
