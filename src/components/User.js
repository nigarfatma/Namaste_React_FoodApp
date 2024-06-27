import React, { useEffect, useState } from "react";
const User = (props) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // api calls
    // const timer = setInterval(() => {
    //   console.log("clear up in set interval");
    // }, 1000);
    console.log("useEffect");
    return () => {
      // clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  console.log("render ");
  return (
    <>
      <div className="user-card">
        <h2>Name:{props.name}</h2>
        <h3>Location:{props.location}</h3>
        <h4>Contact:@nigar76@@z</h4>
        <p>{props.likndln}</p>
        <p>Count:{count}</p>
      </div>
    </>
  );
};
export default User;
