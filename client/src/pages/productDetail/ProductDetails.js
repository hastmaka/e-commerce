import {useSelector} from "react-redux";

import classes from './ProductDetails.module.css';
import ImageSliderContainer from "./imageSliderContainer/ImageSliderContainer";
import DetailsSection from "./detailsSection/DetailsSection";
import ProductDescription from "./productDescription/ProductDescription";

const ProductDetails = () => {
  const detail = useSelector(store => store.detailProduct.detailData);
  const isLoaded = useSelector(store => store.detailProduct.isLoaded);
  return (
    <div className={classes['product-details-general-container']}>
      <div className={classes['product-details-general-container-fix']}>
        {isLoaded && <div className={classes['first-section-container']}>

          <ImageSliderContainer
            image_main={detail.image_main}
            images={detail.images}
            product_discount={detail.product_discount}
          />

          <DetailsSection
            key={detail.product_id}
            product_name={detail.product_name}
            product_price={detail.product_price}
            product_discount={detail.product_discount}
            product_description={detail.product_description}
            sizes={detail.sizes}
            active_colors={detail.active_colors}
            selected_size_id={detail.selected_size_id}
            selected_color_id={detail.selected_color_id}
            product={detail}
          />
        </div>}

        <ProductDescription
          product_description={detail.product_description}
        />
      </div>
    </div>
  )
}

export default ProductDetails;