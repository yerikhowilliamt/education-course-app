import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {cart: cartReducer},
});

console.log("oncreate product data: ", store.getState());

store.subscribe(() => {
  console.log("Cart change: ", store.getState());
});

export default store;