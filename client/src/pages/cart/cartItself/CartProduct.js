import classes from './CartProduct.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartSliceActions} from "../cart-slice";
import {useEffect} from "react";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";

const CartProduct = ({color, imageUrl, price, quantity, discount, size, title}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartSliceActions.addToCart({
      totalPrice: price,
      quantity: quantity
    }));
  }, [])

  return (
    <div className={classes['cart-item-part-noname']}>
      <div className={classes['cart-item-part-description']}>
        <div className={classes['cart-product-img']}>
          <img src={require(`../../../images/${imageUrl}`)} alt=""/>
        </div>
        <div className={classes['cart-product-description']}>
          <p>Name: <span>{title}</span></p>
          <p>Size: <span>{size}</span></p>
          <p>Color: <span>{color}</span></p>
          <p>Quantity: <span>{quantity}</span></p>

          <div className={classes['cart-product-options']}>
            <button>Delete</button>
            <div className={classes.separator}/>
            <button>Update</button>
            <div className={classes.separator}/>
            <button>Save for later</button>
          </div>
        </div>
      </div>
      <div className={classes['cart-item-part-price']}>
        <PriceFormatted
          price={price}
        />
        {/*<span>{discount}%</span>*/}
      </div>
    </div>
  )
}

export default CartProduct;