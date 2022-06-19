import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        wishList: [],
        productQuantity: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        showItemsInCart(state, action) {
            // debugger
            let { total, quantity, productQuantity } = action.payload.data.reduce(
                (tempData, currentItem) => {
                    const { product, cart_product_quantity } = currentItem;
                    tempData.productQuantity.push({
                        id: product.product_id,
                        title: product.product_name,
                        price: product.product_price,
                        quantity: cart_product_quantity
                    })
                    tempData.total += product.product_price * cart_product_quantity;
                    tempData.quantity += cart_product_quantity;
                    return tempData;
                },{
                    /* tempData */
                    productQuantity: [],
                    quantity: 0,
                    total: 0,
                }
            );
            state.totalQuantity = quantity;
            state.totalPrice = total;
            state.items = action.payload.data;
            //"[1] Cart [2] WishList [3] Completed Orders"
            state.wishList = action.payload.data.filter(item => item.order_type === 2);
            state.productQuantity = productQuantity.reduce((acc, curr) => {
                let findIndex = acc.findIndex(item => item.id === curr.id);

                if (findIndex === -1) {
                    acc.push(curr)
                } else {
                    acc[findIndex].quantity += curr.quantity
                }
                return acc;
            }, []);
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