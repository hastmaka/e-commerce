import classes from './Cart.module.scss';
import {NavLink} from "react-router-dom";

const LiCart = ({title, href}) => {
    return (
        <li>
            <NavLink
                to={href}
                className={link => link.isActive ? classes.active : ''}
            >{title}</NavLink>
        </li>
    );
}

export default LiCart;