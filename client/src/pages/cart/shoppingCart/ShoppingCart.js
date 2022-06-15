import classes from './ShoppingCart.module.scss';
import Tr from "../cartComponents/Tr";
import {useSelector} from "react-redux";
import PaymentDetails from "./PaymentDetails";
import Button from '../../../component/button/Button';
import {useForm} from "react-hook-form";


const ShoppingCart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cartItems = useSelector(store => store.cart.items);
    const {handleSubmit, formState: {errors}} = useForm();
    return (
        <>
            <div className={classes['cart-table']}>
                <table className={`${classes.table}`}>
                    <thead>
                        <tr>
                            <th style={{width: '30%'}}>Product</th>
                            <th style={{width: '17%'}}>Price</th>
                            <th style={{width: '17%'}}>Quantity</th>
                            <th style={{width: '17%'}}>Total</th>
                            <th style={{width: '18%'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems?.map(item =>
                        <Tr
                            key={item.cart_id}
                            imageUrl={item.image.image_url}
                            title={item.product.product_name}
                            size={item.size.size_name}
                            color={item.color_color_id}

                            price={item.product.product_price}
                            quantity={item.cart_product_quantity}
                            discount={item.product.product_discount}
                            actions={['delete', 'wishList']}
                            typeOfTable={'shoppingCart'}
                        />
                    )}
                    </tbody>
                </table>
            </div>

            <div className={classes['coupon-discount-payment-details-container']}>
                <div className={`${classes['coupon-discount']}`}>
                    <h4 className={`text-uppercase`}>coupon discount</h4>
                    <p className="text-gray">Enter your coupon code if you have one!</p>
                    <input
                        type="text"
                        placeholder="Enter your code here."
                    />
                    <Button
                        ccsClass='success'
                        name={'Coupon'}
                        justifyContent={'right'}
                    />
                </div>
                <PaymentDetails
                    totalPrice={totalPrice}
                />
            </div>
        </>
    );
}

export default ShoppingCart;