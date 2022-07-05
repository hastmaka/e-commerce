import classes from './MainView.module.css';

// import ProductView from "./productSection/productView/ProductView";
import HeroSection from "./heroSection/HeroSection";
import ProductSection from "./productSection/ProductSection";
import CarouselComponent from "../carousel/CarouselComponent";

const MainView = () => {

    return (
        <div className={classes['main-view-general-container']}>
            <div className={classes['main-view-general-container-fix']}>
                {/*Carousel*/}
                <CarouselComponent/>

                {/*hero-section*/}
                {/*<HeroSection/>*/}

                {/*product-section*/}
                <ProductSection
                    section_title={'best selling'}
                />

                {/*collection-section*/}
                {/*<CollectionContainer*/}
                {/*    data={collection}*/}
                {/*/>*/}

                {/*product-section*/}
                {/*<ProductSection*/}
                {/*  section_title={'shirt'}*/}
                {/*/>*/}

                {/*product-section*/}
                {/*<ProductSection*/}
                {/*  section_title={'shoes'}*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default MainView;