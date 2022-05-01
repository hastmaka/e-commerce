import {Fragment} from "react";

const ImageSlider = ({product_img_url, onClickHandle, image_url}) => {
    return (
        <Fragment>
            <img
                src={require(`../../../../images/${product_img_url}`)} alt=""
                //we take with onClick the image_url coming from the Object
                onClick={() => onClickHandle(image_url)}
            />
        </Fragment>
    )
}

export default ImageSlider;