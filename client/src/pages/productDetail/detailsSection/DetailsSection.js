import classes from './DetailsSection.module.scss';
import {fetchData} from "../../../helper/Api";
import {calcDiscount} from "../../../helper/Helper";
import {useDispatch, useSelector} from "react-redux";
import {detailProductSliceActions} from "../DetailProduct-slice";
import {cartSliceActions} from "../../cart/cart-slice";

import SizeSection from "./sizesSection/SizeSection";
import ColorSection from "./colorsSection/ColorSection";
import RatingComponent from "../../../component/rating/RatingComponent";
import {useEffect} from "react";
import PriceFormatted from "../../../component/priceFormat/PriceFormatted";
// import {cartSliceActions} from "../../cart/cart-slice";

const DetailsSection = ({product_name, product_price, product_discount,
                            product_description, sizes, active_colors,
                            selected_color_id, selected_size_id, product}) => {

    const dispatch = useDispatch();
    const user = useSelector(store => store.login.user);
    const average = useSelector(store => store.detailProduct.ratingAvg);
    const totalReviews = useSelector(store => store.detailProduct.reviews);
    const priceAfterApplyDiscount = calcDiscount(product_price, product_discount);

    debugger

    useEffect(() => {
        dispatch(fetchData(`review-rating-avg/${product.product_id}`, detailProductSliceActions.setRatingAvg))
    }, [totalReviews])

    const addItemToServerCartHandler = (product) => {
        dispatch(fetchData('api/order', cartSliceActions.cartQuantity, 'POST', {
            product_product_id: product.product_id,
            size_size_id: product.selected_size_id,
            color_color_id: product.selected_color_id,
            cart_product_quantity: 1,
            image_image_id: product.image_main_id,
            user_user_id: user.user_id,
        }))
    }

    const onSizeClickHandle = (colors, size) => {
        dispatch(detailProductSliceActions.setSizes({
            size: size
        }))
        dispatch(detailProductSliceActions.setColors({
            colors: colors
        }))
    }

    return (
        <div className={classes['product-details']}>
            <h2 className={classes['product-brand']}>{product_name}</h2>
            <RatingComponent
                average={average}
                totalReviews={totalReviews.length}
                rating_value={average}
                readonly={true}
            />
            <hr/>
            <p className={classes.des}>Description</p>
            <p className={classes['product-short-des']}>{product_description}</p>

            <div className={classes['price-section']}>
                <div className={classes['product-price']}>
                    <PriceFormatted
                        price={priceAfterApplyDiscount}
                        priceFS={26}
                    />
                    <PriceFormatted
                        price={product_price}
                        oldPrice={true}

                        priceFS={18}
                    />
                    {/*<span className={classes.price}>${priceAfterApplyDiscount}</span>*/}
                    {/*<span className={classes.decimal}>{priceAfterApplyDiscount.split('.')[1]}</span>*/}
                </div>
                {/*<div className={classes['product-actual-price']}>*/}
                {/*    <span className={classes['product-actual-price-decimal']}>{`$${product_price}`}</span>*/}
                {/*</div>*/}
            </div>

            <p className={classes['product-sub-heading']}>Select size</p>
            <div>
                {sizes.map(size =>
                    <SizeSection
                        key={size.size_id}
                        id={size.size_id}
                        size={size}
                        selected_size_id={selected_size_id}
                        onClickHandle={onSizeClickHandle}
                    />
                )}
            </div>
            <div className={classes['select-color']}>
                {active_colors.map(color =>
                    <ColorSection
                        key={color.color_color_id}
                        color={color}
                        selected_color_id={selected_color_id}
                    />
                )}
            </div>

            <div>
                <button
                    onClick={() => addItemToServerCartHandler(product)}
                    className={`${classes.btn} ${classes['cart-btn']}`}>add to cart
                </button>
                <button className={`${classes.btn}`}>add to wishlist</button>
            </div>
        </div>
    )
}

export default DetailsSection;