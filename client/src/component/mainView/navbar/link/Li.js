import {NavLink} from "react-router-dom";

import classes from './Li.module.css';

const Li = ({title, href}) => {
    // debugger
    return (
        <li className='link-item'>
            <NavLink
                to={href}
                className={(navData) => navData.isActive ? `${classes.active} ${classes.link}` : classes.link}
            >{title}</NavLink>
        </li>
    )
}

export default Li;