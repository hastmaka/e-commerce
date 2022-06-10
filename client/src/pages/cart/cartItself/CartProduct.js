import classes from './CartProduct.module.scss';
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";

const CartProduct = ({color, imageUrl, price, quantity, discount, size, title}) => {
    return (
        <div className={classes['cart-product-container']}>
            <div className={classes['cart-product-description-container']}>
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
            <div>
                here
            </div>
            <div className={classes['cart-item-part-price']}>
                <PriceFormatted
                    price={price * quantity}
                />
                {/*<span>{discount}%</span>*/}
            </div>
        </div>
    )
}

export default CartProduct;