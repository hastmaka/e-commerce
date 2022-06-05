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
            // debugger
            let { total, quantity } = action.payload.data.reduce(
                (tempData, currentItem) => {
                    const { product, cart_product_quantity } = currentItem;
                    tempData.total += product.product_price * cart_product_quantity;
                    tempData.quantity += cart_product_quantity;

                    return tempData;
                },{
                    /* tempData */
                    total: 0,
                    quantity: 0,
                }
            );
            state.totalQuantity = quantity;
            state.totalPrice = total;
            state.items = action.payload.data;
        },

        addToCart(state, action) {
            debugger
            return {
                ...state,
                totalQuantity: state.totalQuantity + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.totalPrice
            }
        },

        deleteItemsToCart(state, action) {
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
            // debugger
            state.totalQuantity = 0;
            for (let item of action.payload.data) {
                state.totalQuantity += item.cart_product_quantity;
            }
        }
    }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;