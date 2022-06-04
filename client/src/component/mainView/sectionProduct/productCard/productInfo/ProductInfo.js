import classes from './ProductInfo.module.css';
import {calcDiscount} from "../../../../../helper/Helper";

const ProductInfo = ({prod_info_brand, prod_info_description, prod_info_actual_price, discount_tag}) => {
    const priceFixed = calcDiscount(prod_info_actual_price, discount_tag);

    return (
        <div>
            <div className={classes['product-info']}>
                <h2 className={classes['product-brand']}>{prod_info_brand}</h2>
                <p className={classes['product-short-des']}>{prod_info_description}</p>
                <span
                    className={classes.price}>{discount_tag > 0 ? `$${priceFixed}` : `$${prod_info_actual_price.toFixed(2)}`}
                </span>
                {discount_tag > 0 &&
                    <span className={classes['actual-price']}>{`$${prod_info_actual_price.toFixed(2)}`}</span>}
            </div>
        </div>
    )
}

export default ProductInfo;