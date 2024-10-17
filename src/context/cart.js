import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart-item")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart-item", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("cart-item", JSON.stringify(state.value));
    },
    decrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart-item", JSON.stringify(state.value));
    },
    removeAll: (state, action) => {
      state.value = [];
      localStorage.setItem("cart-item", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, removeFromCart, decrementCart, removeAll } =
  cartSlice.actions;
export default cartSlice.reducer;
