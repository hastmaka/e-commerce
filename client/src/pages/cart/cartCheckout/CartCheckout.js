import classes from './CartCheckout.module.css';
import RelatedItems from "./relatedItems/RelatedItems";
import PriceFormatted from "../../../component/mainView/priceFormat/PriceFormatted";
import {NavLink} from 'react-router-dom';

const CartCheckout = ({cartItems, totalPrice, totalQuantity}) => {
  // debugger
  return (
    <>
      <div className={classes['cart-checkout-part-up']}>
        <div className={classes['cart-checkout-header']}>
          <h2>CheckOut</h2>
        </div>
        <div className={classes['cart-checkout-info']}>
          <span>Subtotal ({totalQuantity} item): </span>
          <PriceFormatted
            price={totalPrice}
            priceFS={21}
          />
        </div>
        <div className={classes.checkout}>
          <NavLink
            className={classes['checkout-btn']}
            to={'/checkout'}
          >Proceed to checkout</NavLink>
        </div>
      </div>

      <div className={classes['cart-checkout-part-down']}>
        <div className={classes['cart-checkout-header']}>
          <h2>Related Items</h2>
        </div>
        <div className={classes['cart-related-items']}>
          {cartItems.map(item =>
            <RelatedItems
              key={item.cart_id}
              imageUrl={item.image.image_url}
              title={item.product.product_name}
              price={item.product.product_price}
            />
          )}

        </div>
      </div>
    </>
  )
}

export default CartCheckout;