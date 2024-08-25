import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="font-bold test-3xl p-4 m-4"> Contact us Page</h1>
      <form action="" className="">
        <input
          type="text"
          placeholder="Name"
          className=" border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className=" border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </>
  );
};
export default Contact;
