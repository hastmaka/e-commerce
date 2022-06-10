import classes from '../ProductCard.module.scss';
import {calcDiscount} from "../../../../../helper/Helper";
import PriceFormatted from "../../../../priceFormat/PriceFormatted";

const ProductInfo = ({prod_info_brand, prod_info_description, prod_info_actual_price, discount_tag}) => {
    const priceFixed = calcDiscount(prod_info_actual_price, discount_tag);
    return (
        <div className={classes['product-info']}>
            <h3 className={classes['product-brand']}>{prod_info_brand}</h3>
            <p className={classes['product-short-des']}>{prod_info_description}</p>
            <div className={classes['product-prices']}>
                <PriceFormatted
                    price={discount_tag > 0 ? priceFixed : prod_info_actual_price}
                    currencyTop={-0.5}
                    priceFS={22}
                    decimalFS={14}
                />
                <PriceFormatted
                    price={prod_info_actual_price}
                    oldPrice={true}
                />
            </div>
        </div>
    )
}

export default ProductInfo;