import React, { useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // if no depedency array => useEffect is called every render
  // if dependency array is empty= [] =>useEffect is called on initial render(just one)
  // if dependency array is  [btnName] =>useEffect is called on [btnName] is updated
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cart", cartItems);

  useEffect(() => {}, []);
  return (
    <div className="flex  justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">online status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about"> About Us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg ">
            <Link to="/cart"> Cart-({cartItems.length} items)</Link>
            {/* <Link to="/cart">🛒(0 items)</Link> */}
          </li>
          <button
            className="login-button"
            onClick={() =>
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
