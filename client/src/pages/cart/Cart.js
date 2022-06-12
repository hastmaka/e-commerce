import classes from './Cart.module.scss';
import {useSelector} from "react-redux";
import LiCart from "./LiCart";
import {Outlet} from "react-router-dom";

const cartLinks = [
    {to: 'shoppingCart', name: 'Shopping cart'},
    {to: 'wishList', name: 'wishlist'},
    {to: 'checkout', name: 'check out'},
    {to: 'orderComplete', name: 'order complete'},
]

const Cart = () => {
    return (
        <div className={classes['cart-container']}>
            <div className={classes['cart-container-fix']}>
                <div className={classes['cart-header']}>
                    <h1>Shopping Cart</h1>
                </div>

                <ul>
                    {cartLinks.map(item =>
                        <LiCart
                            key={item.name}
                            title={item.name}
                            href={item.to}
                        />
                    )}
                </ul>

                <div className={classes['cart-outlet-container']}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Cart;