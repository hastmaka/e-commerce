import classes from './ProductImage.module.css';
import CardBtn from "./CardBtn";
import {useDispatch} from "react-redux";
import {fetchData} from "../../../../../helper/Api";
import {detailProductSliceActions} from "../../../../../pages/productDetail/DetailProduct-slice";

const ProductImage = ({discount_tag, img, product_id}) => {
    const dispatch = useDispatch();
    // debugger
    let btnText = [
        {text: 'wishlist', to: 'wishlist'},
        {text: 'detail', to: '/productDetails'},

    ];

    const detailBtnHandle = (product_id, e) => {
        if (e.target.id === 'wishlist') {
            // debugger
        }
        if (e.target.id === 'detail') {
            dispatch(fetchData(`api/product/${product_id}`, detailProductSliceActions.detailProduct));
        }
    }

    return (
        <div className={classes['product-image']}>
            {discount_tag > 0 &&
                <span
                    className={classes['discount-tag']}
                >{`${discount_tag}% OFF`}
                </span>}
            <img
                className={classes['product-thumb']}
                src={require(`../../../../../images/${img}`)}
                alt=""
            />
            <div className={classes['product-btn-container']}>
                {btnText.map(btn =>
                    <CardBtn
                        key={btn.text}
                        id={btn.text}
                        text={btn.text}
                        to={btn.to}
                        product_id={product_id}
                        onClickHandle={detailBtnHandle}
                    />
                )}
            </div>
        </div>
    )
}

export default ProductImage;