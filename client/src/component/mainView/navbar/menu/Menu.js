import Li from "../link/Li";
import {useSelector} from "react-redux";
import classes from './Menu.module.scss';


const Menu = ({open}) => {
    const links = useSelector(state => state.mainView.links);
    return (
        <div className={open ?
            `${classes['menu-general-container']}` :
            `${classes['menu-general-container']} ${classes['gc-active']}`}
        >
            <ul className={classes['links-container']}>
                {links.length && links.map(link => (
                    <Li
                        key={link.link_id}
                        title={link.link_name}
                        href={link.link_href}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Menu;