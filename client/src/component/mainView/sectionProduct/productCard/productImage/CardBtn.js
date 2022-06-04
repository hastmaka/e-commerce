import classes from "./ProductImage.module.css";
import {NavLink} from "react-router-dom";

const CardBtn = ({id, text, to, onClickHandle, product_id}) => {
    // debugger
    return (
        <NavLink
            id={id}
            to={to}
            className={classes['card-btn']}
            onClick={(e) => onClickHandle(product_id, e)}
        >{text}</NavLink>
    )
}

export default CardBtn;