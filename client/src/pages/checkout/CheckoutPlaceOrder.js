import classes from './CheckoutPlaceOrder.module.css';
import Button from "../../component/button/Button";
import {useSelector} from "react-redux";
import PriceFormatted from "../../component/priceFormat/PriceFormatted";

const CheckoutPlaceOrder = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const tax = totalPrice * 0.07;

    return (
        <>
            <div>
                <Button
                    type='order'
                    style={{width: '100%', backgroundColor: '#217888'}}
                    name='Place your order'
                />
                <div className={classes.help}>
                    <span>By placing your order, you agree to <a href='/#'>R&Y Doll's privacy notice</a> and <a
                        href='/#'>conditions of use.</a></span>
                </div>
            </div>

            <div className={classes['order-summary']}>Order Summary</div>

            <div className={classes['checkout-container-right-items']}>
                <span>Items:</span>
                <span>{totalQuantity}</span>
            </div>

            <div className={classes['checkout-container-right-items']}>
                <span>Shipping & handling:</span>
                <PriceFormatted
                    price={5.99}
                />
            </div>

            <div className={classes['shipping-division']}>
                <hr/>
            </div>

            <div className={classes['checkout-container-right-items']}>
                <span>Total before tax:</span>
                <PriceFormatted
                    price={totalPrice}
                />
            </div>

            <div className={classes['checkout-container-right-items']}>
                <span>Estimated tax to be collected:</span>
                <PriceFormatted
                    price={tax}
                />
            </div>

            <div className={classes['order-total-division']}>
                <hr/>
            </div>

            <div className={`${classes['checkout-container-right-items']} ${classes['order-total']}`}>
                <span>Order total:</span>
                <PriceFormatted
                    price={totalPrice + tax}
                />
            </div>
        </>
    )
}

export default CheckoutPlaceOrder;