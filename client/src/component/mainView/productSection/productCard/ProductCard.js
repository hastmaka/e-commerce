import classes from './ProductCard.module.scss';
import ProductImage from './productImage/ProductImage';
import ProductInfo from './productInfo/ProductInfo';

const ProductCard = ({items}) => {
    const {
        product_discount, images, product_name, product_description,
        product_price, product_id
    } = items;

    return (
        <div className={classes['product-card']}>
            <ProductImage
                discount_tag={product_discount}
                img={images[0].image_url}
                product_id={product_id}
            />

            <ProductInfo
                discount_tag={product_discount}
                prod_info_brand={product_name}
                prod_info_description={product_description}
                prod_info_actual_price={product_price}
                product_id={product_id}
            />
        </div>
    )
}

export default ProductCard;