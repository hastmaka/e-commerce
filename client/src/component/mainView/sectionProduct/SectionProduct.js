import {useRef, useState} from "react";

import classes from './SectionProduct.module.css';
import ProductCard from "./productCard/ProductCard";
import {useSelector} from "react-redux";

const SectionProduct = ({section_title}) => {
    const products = useSelector(state => state.mainView.products);
    const [slideLeft, setSlideLeft] = useState(0);
    const containerSlider = useRef();
    const sliderHandler = (n) => {
        const width = containerSlider.current.getBoundingClientRect().width;
        containerSlider.current.scrollLeft += (width / 2) * n;
        /* control if button is render or not*/
        setSlideLeft(containerSlider.current.scrollLeft);

    }

    //have to place the product here

    return (
        <div className={classes['product-general-container']}>
            <h2 className={classes['product-category']}>{section_title}</h2>
            <button
                className={classes['pre-btn']}
                onClick={() => sliderHandler(-1)}>
                <img
                    src={require('../../../images/arrow.png')}
                    alt=""
                />
            </button>

            <button
                className={classes['nxt-btn']}
                onClick={() => sliderHandler(1)}>
                <img
                    src={require('../../../images/arrow.png')}
                    alt=""/>
            </button>
            {/*product-container*/}
            <div className={classes['product-container']} ref={containerSlider}>
                {products.length && products.map((card, index) => (
                    <ProductCard
                        key={index}
                        items={card}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionProduct;