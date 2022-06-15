import classes from "./Checkout.module.scss";

const PaymentMethod = () => {
    return (
        <div className={classes['payment-method']}>
            <h4 className={`text-uppercase`}>payment method</h4>
        </div>
    );
}

export default PaymentMethod;