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

        deleteItemFromCart(state, action) {
            const existingCartItemIndex = state.items.findIndex(item => item.order_id === action.payload);
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalQuantity = state.totalQuantity - existingItem.cart_product_quantity;
            const updatedTotalPrice = state.totalPrice - existingItem.product.product_price * existingItem.cart_product_quantity;
            return {
                ...state,
                items: state.items.filter(item => item.order_id !== action.payload),
                totalPrice: updatedTotalPrice,
                totalQuantity: updatedTotalQuantity
            }
        },

        subItem(state, action){
            const existingCartItemIndex = state.items.findIndex(item => item.order_id === action.payload);
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalQuantity = state.totalQuantity - 1;
            const updatedTotalPrice = state.totalPrice - existingItem.product.product_price;
            let updatedItems;
            if (existingItem.cart_product_quantity === 1) {
                updatedItems = state.items.filter(item => item.order_id !== action.payload);
            } else {
                const updatedItem = {...existingItem, cart_product_quantity: existingItem.cart_product_quantity - 1}
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice,
                totalQuantity: updatedTotalQuantity
            }
        },

        addItem(state, action){
            const existingCartItemIndex = state.items.findIndex(item => item.order_id === action.payload);
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalQuantity = state.totalQuantity + 1;
            const updatedTotalPrice = state.totalPrice + existingItem.product.product_price;
            let updatedItems;
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    cart_product_quantity: existingItem.cart_product_quantity + 1
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice,
                totalQuantity: updatedTotalQuantity
            }
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