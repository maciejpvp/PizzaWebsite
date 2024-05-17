import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./featues/user/userSlice";
import cartReducer from "./featues/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
