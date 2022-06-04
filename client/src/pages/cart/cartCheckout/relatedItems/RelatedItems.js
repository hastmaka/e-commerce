import classes from './RelatedItems.module.css';
import PriceFormatted from "../../../../component/priceFormat/PriceFormatted";

const RelatedItems = ({imageUrl, title, price}) => {
    return (
        <div className={classes['cart-item-part-noname']}>
            <div className={classes['cart-item-part-description']}>
                <div className={classes['cart-product-img']}>
                    <img src={require(`../../../../images/${imageUrl}`)} alt=""/>
                </div>
                <p className={classes['cart-item-part-title']}>{title}</p>
            </div>

            <div className={classes['cart-item-part-price']}>
                <PriceFormatted
                    price={price}
                />
            </div>
        </div>
    )
}

export default RelatedItems;