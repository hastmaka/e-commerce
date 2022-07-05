import {NavLink} from "react-router-dom";

const CardBtn = ({id, icon, to, onClickHandle, product_id}) => {
    return (
        <li>
            <NavLink
                id={id}
                to={to}
                onClick={(e) => onClickHandle(product_id, e)}
            >{icon}</NavLink>
        </li>
    )
}

export default CardBtn;