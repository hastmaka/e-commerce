import classes from './Profile.module.scss';
import {NavLink, useLocation} from "react-router-dom";

const LiProfile = ({title, href}) => {
    const location = useLocation();

    const customClass = () => {
        const {pathname} = location;
        let className = false;
        if (pathname === '/profile' || href === 'general') {
            className = true
        }
        return className;
    }

    return (
        <li className='link-item'>
            <NavLink
                to={href}
                className={(e) =>
                    customClass() ? `${classes.active}` :
                    e.isActive ? `${classes.active}` : ''
                }
            >{title}</NavLink>
        </li>
    );
}

export default LiProfile;

// (navData) =>
//     navData.isActive ? `${classes.active}` : ''