import classes from'./ProductCard.module.css';
import ProductImage from "./productImage/ProductImage";
import ProductInfo from "./productInfo/ProductInfo";

const ProductCard = ({items}) => {
    // debugger
    // const {discount_tag, img, btnText, prod_info_brand, prod_info_description,
    //     prod_info_actual_price} = items;

    const {product_discount, images, product_name, product_description,
        product_price, product_id} = items;

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
            />
        </div>
    )
}

export default ProductCard;