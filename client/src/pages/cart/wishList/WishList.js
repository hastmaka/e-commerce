import classes from '../shoppingCart/ShoppingCart.module.scss';
import Tr from "../cartComponents/Tr";
import {useSelector} from "react-redux";

const WishList = () => {
    const wishList = useSelector(store => store.cart.wishList);
    debugger
    return (
        <>
            <div className={classes['cart-table']}>
                <table className={`${classes.table}`}>
                    <thead>
                    <tr>
                        <th style={{width: '30%'}}>Product</th>
                        <th style={{width: '17%'}}>Price</th>
                        <th style={{width: '17%'}}>Stock status</th>
                        <th style={{width: '17%'}}>add to cart</th>
                        <th style={{width: '18%'}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {wishList?.map(item =>
                        <Tr
                            key={item.order_id}
                            imageUrl={item.image.image_url}
                            size={item.size.size_name}
                            color={item.color_color_id}

                            price={item.product.product_price}
                            quantity={item.cart_product_quantity}
                            discount={item.product.product_discount}
                            title={item.product.product_name}
                            actions={['delete']}
                            typeOfTable={'wishList'}
                            cartItems={wishList}
                        />
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default WishList;