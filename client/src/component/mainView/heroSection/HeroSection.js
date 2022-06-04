import classes from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={classes['hero-section-general-container']}>
            <div className={classes['hero-section-general-container-fix']}>
                <div className={classes['hero-section-left-side']}>
                    <h1>A Brand with a History</h1>
                    <p className='sub-heading'>
                        best fashion collection of all time
                    </p>
                    <button className={classes['read-more-btn']}>Read-More</button>
                </div>
                <div className={classes['hero-section-right-side']}>
                    <img src={require('../../../images/others/unsplash_1.jpg')} alt=""/>
                </div>
                {/*<div className={classes['hero-section-right-side']}>*/}
                {/*  <h1>A Brand with a History</h1>*/}
                {/*  <p className='sub-heading'>*/}
                {/*    best fashion collection of all time*/}
                {/*  </p>*/}
                {/*  <button className={classes['read-more-btn']}>Read-More</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default HeroSection;