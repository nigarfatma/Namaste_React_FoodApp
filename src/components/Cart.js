import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // const store = useSelector((store)=>store);
  // const cartItems = store.cart.items;

  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center m-4 p-4 ">
        <h1 className="text-lg font-bold">cart</h1>

        <div className="w-6/12 m-auto p-4">
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1>cart is empty.Add Items to the cart</h1>
          )}
          <ItemList item={cartItems} />
        </div>
      </div>
    </>
  );
};
export default Cart;
