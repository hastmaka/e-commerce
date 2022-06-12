import classes from './Checkout.module.css';
import ShippingAndPayment from './ShippingAndPayment';
import CheckoutItemList from './CheckoutItemList';
import CheckoutPlaceOrder from './CheckoutPlaceOrder';
import FrequentQuestions from './FrequentQuestions';

const Checkout = () => {
    return (
        <div className={classes['checkout-container']}>

            <div className={classes['checkout-header']}>
                <h1>CheckOut</h1>
            </div>

            <div className={classes['checkout-container-fix-to-center']}>

                <div className={classes['checkout-container-left']}>

                    <ShippingAndPayment/>

                    <CheckoutItemList/>

                </div>

                <div className={classes['checkout-container-right']}>
                    <div className={classes['checkout-container-right-fix']}>

                        <CheckoutPlaceOrder/>

                    </div>

                    <FrequentQuestions/>

                </div>
            </div>
        </div>
    )
}

export default Checkout;