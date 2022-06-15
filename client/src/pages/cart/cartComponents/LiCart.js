import classes from './LiCart.module.scss';
import {NavLink} from "react-router-dom";

const LiCart = ({title, href}) => {
    return (
        <li className={classes['li-cart']}>
            <NavLink
                to={href ? href : ''}
                className={link => link.isActive ? classes.active : ''}
            >{title ? title : ''}</NavLink>
        </li>
    );
}

export default LiCart;