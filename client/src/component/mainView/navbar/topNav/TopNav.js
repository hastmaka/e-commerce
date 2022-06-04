import classes from './TopNav.module.css';
import {NavLink} from "react-bootstrap";
/* icons */
import {FaInstagram, FaTiktok} from "react-icons/fa";
import {MdOutlinePhone} from "react-icons/md";

const TopNav = () => {
    return (
        <div className={classes['top-nav-general-container']}>
            <div className={classes['top-nav-left']}>
                <NavLink
                    to='/home'>
                    <FaTiktok className={classes['social-icon']}/>
                </NavLink>

                <NavLink
                    to='https://www.linkedin.com'>
                    <FaInstagram className={classes['social-icon']}/>
                </NavLink>
            </div>
            <div>welcome</div>
            <div className={classes['top-nav-right']}>
        <span>
          <MdOutlinePhone className={classes['social-icon']}/>
          786-560-6292
        </span>
                <span>16950 North Bay Road, Sunny Isles, 33160</span>
            </div>
        </div>
    )
}

export default TopNav;