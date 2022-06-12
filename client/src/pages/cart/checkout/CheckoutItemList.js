import classes from './CheckoutItemList.module.css';
import {useSelector} from "react-redux";

const CheckoutItemList = () => {
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className={classes['checkout-item-list']}>
            {/*{cartItems.map(item =>*/}
            {/*    <CartProduct*/}
            {/*        key={item.cart_id}*/}
            {/*        color={item.color_color_id}*/}
            {/*        imageUrl={item.image.image_url}*/}
            {/*        price={item.product.product_price}*/}
            {/*        quantity={item.cart_product_quantity}*/}
            {/*        discount={item.product.product_discount}*/}
            {/*        size={item.size_size_id}*/}
            {/*        title={item.product.product_name}*/}
            {/*    />*/}
            {/*)}*/}
        </div>
    )
}

export default CheckoutItemList;