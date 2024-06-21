import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // if no depedency array => useEffect is called every render
  // if dependency array is empty= [] =>useEffect is called on initial render(just one)
  // if dependency array is  [btnName] =>useEffect is called on [btnName] is updated
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart"> Cart</Link>
          </li>
          <button
            className="login-button"
            onClick={() =>
              btnName === "login" ? setBtnName("LogOut") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
