import classes from './ShippingAndPayment.module.css';
import Button from "../../component/button/Button";
import {useSelector} from "react-redux";

const ShippingAndPayment = () => {
    const user = useSelector(state => state.login.user);
    debugger
    return (
        <div className={classes['checkout-shipping-payment']}>

            <div className={classes.shipping}>
                <div className={classes.title}>
                    <div>Shipping address</div>
                    <div><a href='#'>Change</a></div>
                </div>
                <div>{user.user_address}</div>
                <div>{user.user_phone}</div>
                <div><a href='#'>Add Delivery Instruction</a></div>
            </div>

            <div className={classes['payment-method']}>
                <div className={classes.title}>
                    <div>Payment method</div>
                    <div><a href='#'>Change</a></div>
                </div>
                <div>VISA ending in 5487</div>
            </div>

            <div className={classes['payment-method']}>
                <div className={classes.title}>Add a gift card, promotion code, or voucher</div>
                <div>
                    <input type="text"/>
                    <Button
                        type='coupon'
                        name='Apply'
                    />
                </div>
            </div>
        </div>
    )
}

export default ShippingAndPayment;