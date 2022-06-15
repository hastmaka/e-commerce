import classes from './OrderComplete.module.scss';
import {useState} from "react";
import LiCart from "../cartComponents/LiCart";

const OrderComplete = () => {
    const [disable, setDisable] = useState(true)
    return (
        <>
            {disable ?
                <div className={classes['order-complete-container']}>
                    <div className={classes['order-thanks']}>
                        Thank you. Your order has been received.
                    </div>
                    <div className={classes['order-receive']}>
                        <span>Order No <br/> M 265466</span>
                        <span>Date <br/> June 15,2022</span>
                        <span>Total <br/> $580.89</span>
                        <span>Payment Method <br/> Check Payment</span>
                    </div>
                    <div className={classes['back-to-home']}>
                        <LiCart
                            key={'backToHome'}
                            title={'Back To Home'}
                            href={'home'}
                        />
                    </div>
                </div>
                :
                <div style={{textAlign: 'center'}}>
                    Your Order is not complete Yet
                </div>
            }
        </>
    );
}

export default OrderComplete;