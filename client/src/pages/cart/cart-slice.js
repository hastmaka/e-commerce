import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    showItemsInCart(state, action) {
      return {
        ...state,
        items: action.payload.data
      }
    },

    addToCart(state, action) {
      return {
        ...state,
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalPrice: state.totalPrice + action.payload.totalPrice
      }
    },

    deleteItemsToCart() {
    },

    emptyCart(state) {
      return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalPrice: 0
      }
    },

    cartQuantity(state, action) {
      state.totalQuantity = 0;
      state.totalPrice = 0;
      for (let item of action.payload.data) {
        state.totalQuantity += item.cart_product_quantity;
        state.totalPrice += item.product.product_price;
      }
    }
  }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;