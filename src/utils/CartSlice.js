import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanialla(older) Redux => DON'T MUTATE STATE,returning is not manadatory
      // const newState = [...state];
      // newState.itemspush(action.payload);
      // return newState
      // mutating the state here

      // redux Toolkit
      // we have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state.items.length = 0; //OriginalState=[]
      // this new object  will be replaced inside OriginalState=[{ items: [] }
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
