import {configureStore} from "@reduxjs/toolkit";

import mainViewReducer from '../component/mainView/MainView-slice';
import detailProductReducer from '../pages/productDetail/DetailProduct-slice';
import cartReducer from '../pages/cart/cart-slice';
import loginSlice from "../pages/login/login-slice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        mainView: mainViewReducer,
        detailProduct: detailProductReducer,
        cart: cartReducer
    }
})

export default store;