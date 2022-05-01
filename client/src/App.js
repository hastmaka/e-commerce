import {Route, Routes, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "./helper/Api";
import {useLocation} from "react-router-dom";
import {mainViewSliceActions} from "./component/mainView/MainView-slice";

import './App.css';
import Layout from "./component/layout/Layout";
import MainView from "./component/mainView/MainView";

import Accessories from "./pages/accessories/Accessories";
import Kids from "./pages/kids/Kids";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import ProductDetails from "./pages/productDetail/ProductDetails";

import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/login/ForgotPass";
import CreateAccount from "./pages/login/CreateAccount";

import Profile from "./pages/profile/Profile";

/* firebase */
import {initialize} from "./helper/firebase/Firebase_init";
import {loginSliceActions} from "./pages/login/login-slice";
import {cartSliceActions} from "./pages/cart/cart-slice";

import ProfileGeneral from "./pages/profile/profileGeneral/ProfileGeneral";
import ProfileYourOrder from "./pages/profile/profileYourOrders/ProfileYourOrders";
import ProfileLoginAndSecurity from "./pages/profile/profileLoginAndSecurity/ProfileLoginAndSecurity";
import ProfileYourPayments from "./pages/profile/profileYourPayments/ProfileYourPayments";
import ProfileYourMessages from "./pages/profile/profileYourMessage/ProfileYourMessages";
import ProfileArchivedOrders from "./pages/profile/profileArchivedOrder/ProfileArchivedOrders";
import ProfileWishList from "./pages/profile/profileWishList/ProfileWishList";
import Checkout from "./pages/checkout/Checkout";

initialize();

const App = () => {
  const dispatch = useDispatch();
  const loginStore = useSelector(store => store.login);

  const userIsLoggedIn = !!loginStore.token;

  /* fix to always begin from the stop*/
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // debugger

  useEffect(() => {
    // dispatch(fetchData('product/1', detailProductSliceActions.detailProduct));
    dispatch(fetchData('link', mainViewSliceActions.savedLinks));
    dispatch(fetchData('product/all', mainViewSliceActions.mainProducts));
    if (!!localStorage.getItem('token')) {
      dispatch(fetchData('api/auth/login', loginSliceActions.loginHandler, 'POST', {
        user: {idToken: localStorage.getItem('token')}
      }, null, (data) => {
        dispatch(cartSliceActions.cartQuantity({data: data.data.cart}))
      }))
    }
  }, [dispatch]);


  return (
    <Layout>
      {/*navbar*/}
      <Routes>

        <Route path='/' element={<Navigate to='/home' replace/>}/>
        <Route>
          <Route path='/home' element={<MainView/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
        </Route>

        <Route path='/productDetails' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

        {!userIsLoggedIn && <Route path='/login' element={<Login/>}/>}
        <Route path='/forgotPassword' element={<ForgotPass/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>

        {userIsLoggedIn &&
          <Route path='/profile' element={<Profile/>}>
            <Route index element={<ProfileGeneral/>}/>
            <Route path='general' element={<ProfileGeneral/>}/>
            <Route path='yourOrder' element={<ProfileYourOrder/>}/>
            <Route path='loginAndSecurity' element={<ProfileLoginAndSecurity/>}/>
            <Route path='yourPayments' element={<ProfileYourPayments/>}/>
            <Route path='yourMessages' element={<ProfileYourMessages/>}/>
            <Route path='archivedOrders' element={<ProfileArchivedOrders/>}/>
            <Route path='wishList' element={<ProfileWishList/>}/>
          </Route>}

        <Route path='*' element={<Navigate to={'/home'} replace/>}/>

      </Routes>
    </Layout>
  )
}

export default App;