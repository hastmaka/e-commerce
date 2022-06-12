import classes from './ShoppingCart.module.scss';
import Tr from "../cartITable/Tr";
import {useSelector} from "react-redux";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";

const ShoppingCart = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cartItems = useSelector(store => store.cart.items);
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
                    <input type="text" placeholder="Enter your code here."/>
                    <button className='btn-outline-success'>Apply Coupon</button>
                </div>
                <div className={classes['payment-details']}>
                    <h4 className={`text-uppercase`}>Payment details</h4>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='text-left'>Cart Subtotal</td>
                                <td className='text-end'>
                                    <PriceFormatted
                                        price={totalPrice}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left'>Taxes</td>
                                <td className='text-end'>
                                    <PriceFormatted
                                        price={totalPrice * 0.07}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left'>Coupon Discount</td>
                                <td className='text-end'>0%</td>
                            </tr>
                            <tr>
                                <td className='text-left' style={{color: '#c87065'}}>Order Total</td>
                                <td className='text-end' >
                                    <PriceFormatted
                                        price={(totalPrice * 0.07) + totalPrice}
                                        color={'#c87065'}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;