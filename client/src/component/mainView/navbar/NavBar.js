import classes from './NavBar.module.css';
import Nav from "./nav/Nav";
import TopNav from "./topNav/TopNav";
import {data} from "../../../store/dummyData";

const NavBar = () => {
    return (
        <div className={classes.navbar}>
            {/*<TopNav/>*/}
            <Nav
                data={data}
            />
        </div>
    )
}

export default NavBar;