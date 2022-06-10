import classes from './NavBar.module.scss';
import Nav from "./nav/Nav";
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