import classes from '../ProductCard.module.scss';
import CardBtn from "./CardBtn";
import {useDispatch} from "react-redux";
import {fetchData} from "../../../../../helper/Api";
import {detailProductSliceActions} from "../../../../../pages/productDetail/DetailProduct-slice";
/* icons */
import {RiHeart2Line,RiEyeLine} from 'react-icons/ri';

const ProductImage = ({discount_tag, img, product_id}) => {
    const dispatch = useDispatch();
    // debugger
    let btnText = [
        {icon: <RiHeart2Line className={classes['product-img-icon']}/>, to: 'wishlist', id: 'wishlist'},
        {icon: <RiEyeLine className={classes['product-img-icon']}/>, to: '/productDetails', id: 'detail'},
    ];

    const detailBtnHandle = (product_id, e) => {
        if (e.currentTarget.id === 'wishlist') {
            // debugger
        }
        if (e.currentTarget.id === 'detail') {
            dispatch(fetchData(`api/product/${product_id}`, detailProductSliceActions.detailProduct));
        }
    }

    return (
        <div className={classes['product-card-container']}>
            {discount_tag > 0 &&
                <span
                    className={classes['discount-tag']}
                >{`${discount_tag}% Off`}
                </span>}
            <img
                className={classes['product-image']}
                src={require(`../../../../../images/${img}`)}
                alt=""
            />
            <div className={classes['product-btn-container']}>
                {btnText.map(btn =>
                    <CardBtn
                        key={btn.id}
                        icon={btn.icon}
                        id={btn.id}
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