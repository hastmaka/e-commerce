import classes from '../ProductCard.module.scss';
import {calcDiscount} from "../../../../../helper/Helper";
import PriceFormatted from "../../../../priceFormat/PriceFormatted";
import RatingComponent from "../../../../rating/RatingComponent";

const ProductInfo = ({prod_info_brand, prod_info_description, prod_info_actual_price, discount_tag}) => {
    // debugger
    const priceFixed = calcDiscount(prod_info_actual_price, discount_tag);
    return (
        <div className={classes['product-info']}>
            <div>
                <span className={classes['product-brand']}>{prod_info_brand}</span>
                <RatingComponent
                    // average={average}
                    // totalReviews={totalReviews.length}
                    // rating_value={average}
                    size={16}
                    readonly={true}
                />
            </div>
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