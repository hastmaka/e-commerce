import {configureStore} from "@reduxjs/toolkit";

import mainViewSlice from '../component/mainView/MainView-slice';
import detailProductSlice from '../pages/productDetail/DetailProduct-slice';
import cartSlice from '../pages/cart/cart-slice';
import loginSlice from "../pages/login/login-slice";
import modalSlice from "../component/modal/modal-slice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        mainView: mainViewSlice,
        detailProduct: detailProductSlice,
        cart: cartSlice,
        modal: modalSlice,
    }
})

export default store;