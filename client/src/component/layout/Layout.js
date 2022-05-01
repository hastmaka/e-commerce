import {footerData} from "../../store/dummyData";

import classes from './Layout.module.css';
import {Fragment} from "react";
import NavBar from "../mainView/navbar/NavBar";
import Footer from "../mainView/footer/Footer";
import Login from "../../pages/login/Login";
import Checkout from "../../pages/checkout/Checkout";
import Cart from "../../pages/cart/Cart";
import Profile from "../../pages/profile/Profile";
// import ProductDetails from "../../pages/productDetail/ProductDetails";
// import Cart from "../../pages/cart/Cart";

const Layout = (props) => {
    return (
        <Fragment>
            {/*navBar*/}
            <NavBar/>

            {/*login*/}
            {/*<Login/>*/}

            {/*checkout*/}
            {/*<Checkout/>*/}

            {/*profile*/}
            {/*<Profile/>*/}

            {/*main content*/}
            <main className={classes.main}>{props.children}</main>

            {/*test*/}
            {/*<ProductDetails/>*/}

            {/*cart*/}
            {/*<Cart/>*/}

            {/*footer*/}
            <Footer
                data={footerData}
            />
        </Fragment>
    )
}

export default Layout;