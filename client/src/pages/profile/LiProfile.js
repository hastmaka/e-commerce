import classes from './Profile.module.scss';
import {NavLink} from "react-router-dom";

const LiProfile = ({title, href}) => {


    return (
        <li className='link-item'>
            <NavLink
                to={href}
                className={e => e.isActive ? `${classes.active}` : ''}

            >{title}</NavLink>
        </li>
    );
}

export default LiProfile;