import classes from './MainView.module.css';

// import ProductView from "./sectionProduct/productView/ProductView";
import HeroSection from "./heroSection/HeroSection";
import SectionProduct from "./sectionProduct/SectionProduct";
import CarouselComponent from "../carousel/CarouselComponent";

const MainView = () => {

    return (
        <div className={classes['main-view-general-container']}>
            <div className={classes['main-view-general-container-fix']}>
                {/*Carousel*/}
                <CarouselComponent/>

                {/*hero-section*/}
                <HeroSection/>

                {/*product-section*/}
                <SectionProduct
                    section_title={'best selling'}
                />

                {/*collection-section*/}
                {/*<CollectionContainer*/}
                {/*    data={collection}*/}
                {/*/>*/}

                {/*product-section*/}
                {/*<SectionProduct*/}
                {/*  section_title={'shirt'}*/}
                {/*/>*/}

                {/*product-section*/}
                {/*<SectionProduct*/}
                {/*  section_title={'shoes'}*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default MainView;