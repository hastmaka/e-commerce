import classes from './test.module.scss';

import {RiFacebookBoxFill} from 'react-icons/ri';

const Test = () => {
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.content}>
                    <div className={classes.img}><img src="https://unsplash.it/200/200" alt=""/></div>
                    <div className={classes['card-content']}>
                        <h3>Luis Molina <br/><span>Web Developer</span></h3>
                    </div>
                </div>
                <div>
                    <ul className={classes.sci}>
                        <li>
                            <a href=""><i aria-hidden={true}><RiFacebookBoxFill/></i></a>
                        </li>
                        <li>
                            <a href=""><i aria-hidden={true}><RiFacebookBoxFill/></i></a>
                        </li>
                        <li>
                            <a href=""><i aria-hidden={true}><RiFacebookBoxFill/></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Test;