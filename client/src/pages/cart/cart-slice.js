import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        wishList: [],
        orderComplete: [],
        productQuantity: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        showItemsInCart(state, action) {
            // debugger
            let { total, quantity, productQuantity } = action.payload.data.reduce(
                (tempData, currentItem) => {
                    // debugger
                    const { product, cart_product_quantity, order_type } = currentItem;
                    tempData.productQuantity.push({
                        id: product.product_id,
                        title: product.product_name,
                        price: product.product_price,
                        quantity: cart_product_quantity
                    })
                    tempData.total += (order_type === 1) ? product.product_price * cart_product_quantity : 0;
                    tempData.quantity += (order_type === 1) ? cart_product_quantity : 0;
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
            //"[1] Cart [2] WishList [3] Completed Orders"
            state.items = action.payload.data.filter(item => item.order_type === 1);
            state.wishList = action.payload.data.filter(item => item.order_type === 2);
            state.orderComplete = action.payload.data.filter(item => item.order_type === 3);
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
            state.totalQuantity = 0;
            for (let item of action.payload.data) {
                state.totalQuantity += (item.order_type === 1) ? item.cart_product_quantity : 0;
            }
        }
    }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;