import classes from './ProductDescription.module.css';
import NavigationTabs from "./NavigationTabs";

const ProductDescription = ({product_description}) => {
  return (
      <div className={classes['detail-description']}>
          <NavigationTabs
            product_description={product_description}
          />
      </div>
  )
}

export default ProductDescription;