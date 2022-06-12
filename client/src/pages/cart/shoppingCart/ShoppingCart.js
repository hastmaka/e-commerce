import classes from './ShoppingCart.module.scss';
import Tr from "../cartITable/Tr";
import {useSelector} from "react-redux";

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
                            size={item.size.size_name}
                            color={item.color_color_id}

                            price={item.product.product_price}
                            quantity={item.cart_product_quantity}
                            discount={item.product.product_discount}
                            title={item.product.product_name}
                            cartItems={cartItems}
                        />
                    )}
                    </tbody>
                </table>
            </div>

            <div>

            </div>
        </>
    );
}

export default ShoppingCart;