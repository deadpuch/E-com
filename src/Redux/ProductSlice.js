import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  apistate: [],
  addcart: [],
};

export const productSlice = createSlice({
  name: "count",
  initialState,

  reducers: {
 
    allapi: (state, action) => {
      state.apistate = action.payload;
    },

    cart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.addcart.findIndex(
        (item) => item.id === itemToAdd.id
      );

      if (existingItemIndex === -1) {
        state.addcart.push({ ...itemToAdd, count: 1 });
      } else {
        state.addcart[existingItemIndex].count += 1;
      }
    },

    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.addcart.findIndex(item => item.id === itemToAdd.id);

      if (existingItemIndex === -1) {
        // Item is not in the cart, add it with count 1
        state.addcart.push({ ...itemToAdd, count: 1 });
      } else {
        // Item already exists in the cart, increment its count
        state.addcart[existingItemIndex].count += 1;
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.addcart.findIndex(item => item.id === itemId);

      if (itemIndex !== -1) {
        // Decrement item count if more than 1, otherwise remove it
        if (state.addcart[itemIndex].count > 1) {
          state.addcart[itemIndex].count -= 1;
        } else {
          state.addcart.splice(itemIndex, 1);  // Remove item if count is 1
        }
      }
    },

    clearCart: (state) => {
      state.addcart = [];  // Clear the cart
    },
  
  },
});

export const { Setcount, decriment, allapi, cart,removeFromCart,addToCart } = productSlice.actions;
export default productSlice.reducer;
