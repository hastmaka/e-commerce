import {footerData} from "../../store/dummyData";

import classes from './Layout.module.css';
import NavBar from "../mainView/navbar/NavBar";
import Footer from "../mainView/footer/Footer";
import ProductSection from "../mainView/productSection/ProductSection";
import Test from "./Test";
// import ProductDetails from "../../pages/productDetail/ProductDetails";
// import Cart from "../../pages/cart/Cart";

const Layout = (props) => {
    return (
        <>
            {/*navBar*/}
            <NavBar/>

            {/*login*/}
            {/*<Login/>*/}

            {/*checkout*/}
            {/*<Checkout/>*/}

            {/*profile*/}
            {/*<Profile/>*/}

            {/* productSection*/}
            {/*<ProductSection*/}
            {/*    section_title={'best selling'}*/}
            {/*/>*/}

            {/*<Test/>*/}

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
        </>
    )
}

export default Layout;