import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        const { cart } = state;
        const index = cart.findIndex((item) => item.id === action.payload.id);

        if (index !== -1) {
          const item = cart[index];
          item.quantity++;
          item.totalPrice = item.quantity * item.unitPrice;
        } else {
          cart.push(action.payload);
        }
      },
      prepare: (id, name, unitPrice, quantity = 1) => {
        const totalPrice = unitPrice * quantity;
        return {
          payload: { id, name, unitPrice, quantity, totalPrice },
        };
      },
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  incItemQuantity,
  decItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
