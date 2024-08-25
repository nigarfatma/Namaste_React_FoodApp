import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
const ItemList = ({ item, dummy }) => {
  // console.log("item", item);
  // console.log(dummy);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <>
      <div>
        {item.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            {/* Details of item */}
            <div className="w-9/12">
              <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>

                <span className="m-2">
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            {/* image of item */}
            <div className="  w-3/12 ">
              <img
                src={
                  item.card.info.imageId ? CDN_URL + item.card.info.imageId : ""
                }
                className="w-22 p-4"
              />

              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg -mt-4 relative bottom-4 "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              {/* <img
                src={CDN_URL + item.card.info.imageId}
                alt="_logo"
                className="w-22 p-4"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ItemList;
