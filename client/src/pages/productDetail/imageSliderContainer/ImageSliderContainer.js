import {useDispatch} from "react-redux";
import {detailProductSliceActions} from "../DetailProduct-slice";

import classes from './ImageSlideContainer.module.css';
import ImageSlider from "./imageSlider/ImageSlider";

const ImageSliderContainer = ({image_main, images, product_discount}) => {
    const dispatch = useDispatch();

    const onClickHandle = (image_url) => {
        dispatch(detailProductSliceActions.setMainSliderImage({
            image_main: image_url
        }))
    }
    return (
        <div className={classes['image-slider']}>
            <div className={classes['discount-badge-container']}>
                <span className={classes['discount-badge']}>{product_discount}% off</span>
            </div>
            {image_main && <img src={require(`../../../images/${image_main}`)} alt=""/>}
            <div className={classes['product-images']}>
                {/*you have to wait for the data coming from the server*/}
                {images.length && images.map(image =>
                    <ImageSlider
                        image_id={image.image_id}
                        key={image.image_id}
                        product_img_url={image.image_url}
                        onClickHandle={onClickHandle}
                        //here we pass the Object data
                        image_url={image.image_url}
                    />
                )}
            </div>
        </div>
    )
}

export default ImageSliderContainer;