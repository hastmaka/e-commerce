import {useDispatch, useSelector} from "react-redux";

import classes from './Cart.module.css';
import CartProduct from "./cartItself/CartProduct";
import CartCheckout from "./cartCheckout/CartCheckout";
import PriceFormatted from "../../component/priceFormat/PriceFormatted";
import {cartSliceActions} from "./cart-slice";
import {useLocation} from "react-router-dom";
import {fetchData} from "../../helper/Api";
import {useEffect} from "react";
// import {cartSliceActions} from "./cart-slice";

const Cart = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cartItems = useSelector(store => store.cart.items);
    const loginStore = useSelector(store => store.login);

    const location = useLocation();
    const dispatch = useDispatch();
    const emptyCart = () => {
        dispatch(cartSliceActions.emptyCart())
    }

    useEffect(() => {
        if(location.pathname === '/cart') {
            if(performance.navigation.type === 1) {
                debugger
                dispatch(fetchData(`api/cart/all/${loginStore.user.user_id}`, cartSliceActions.showItemsInCart));
                emptyCart()
            }
        }
    }, [])


    //
    // useEffect(() => {
    //     // dispatch(cartSliceActions.emptyCart());
    //     dispatch(cartSliceActions.addToCart({
    //         items: cartItems,
    //         totalPrice: totalPrice,
    //         quantity: totalQuantity
    //     }));
    // }, [cartItems])

    return (
        <div className={classes['cart-container']}>
            <div className={classes['cart-header']}>
                <h1>Cart</h1>
            </div>

            <div className={classes['cart-itself']}>
                <div className={classes['cart-item-part']}>
                    <div className={classes['cart-item-part-title']}>
                        <h2>Shopping Cart</h2>
                        <p>Total</p>
                    </div>

                    {cartItems?.map(item =>
                        <CartProduct
                            key={item.cart_id}
                            color={item.color_color_id}
                            imageUrl={item.image.image_url}
                            price={item.product.product_price}
                            quantity={item.cart_product_quantity}
                            discount={item.product.product_discount}
                            size={item.size_size_id}
                            title={item.product.product_name}
                            cartItems={cartItems}
                        />
                    )}

                    <div className={classes['cart-sub-total']}>
                        <span>Subtotal ({totalQuantity} item): </span>
                        <PriceFormatted
                            price={totalPrice}
                            priceFS={21}
                        />
                    </div>
                </div>

                <div className={classes['cart-checkout-part-container']}>
                    <CartCheckout
                        totalQuantity={totalQuantity}
                        totalPrice={totalPrice}
                        cartItems={cartItems}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart;