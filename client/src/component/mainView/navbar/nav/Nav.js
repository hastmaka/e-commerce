import classes from './Nav.module.css';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";
import {loginSliceActions} from "../../../../pages/login/login-slice";
import {fetchData} from "../../../../helper/Api";
import {cartSliceActions} from "../../../../pages/cart/cart-slice";
import {useRef, useState} from "react";
import Burger from "../burger/Burger";
import Menu from "../menu/Menu";
//icons
import {RiUserFollowFill} from 'react-icons/ri';
import {MdOutlineShoppingCart} from 'react-icons/md';
import {GoSignIn, GoSignOut} from 'react-icons/go';
import {useOnClickOutside} from "../../../../helper/Hooks";

const Nav = ({data}) => {
  let {company_logo} = data;
  const dispatch = useDispatch();
  const location = useLocation();
  const totalQuantity = useSelector(store => store.cart.totalQuantity);
  const loginStore = useSelector(store => store.login);
  const userIsLoggedIn = !!loginStore.token;

  /* close sideNav on outside click*/
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const emptyCart = () => {
    dispatch(cartSliceActions.emptyCart({location: location.pathname}))
  }

  const cartItemsHandler = () => {
    if (location.pathname !== '/cart') {
      dispatch(fetchData(`api/cart/all/${loginStore.user.user_id}`, cartSliceActions.showItemsInCart));
      emptyCart()
    }
  }

  return (
    <div className={classes.nav}>
      <div
        className={open ? `${classes['menu-overlay']} ${classes['menu-overlay-active']}` : `${classes['menu-overlay']}`}/>

      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
      </div>
      <img className={classes['brand-logo']} src={require(`../../../../images/${company_logo}.png`)} alt=""/>
      <div className={classes['nav-items']}>
        {userIsLoggedIn &&
          <div>
            <NavLink
              to={'/profile'}>
              <RiUserFollowFill className={classes['nav-icon']}/>
            </NavLink>
          </div>}

        {userIsLoggedIn &&
          <div>
            <NavLink
              to={'/cart'}
              onClick={() => cartItemsHandler()}>
              <MdOutlineShoppingCart className={classes['nav-icon']}/>
            </NavLink>
            {totalQuantity > 0 && <div className={classes.badge}>{totalQuantity}
            </div>}
          </div>}

        <div>
          <NavLink
            className={classes['login-logout-link']}
            to={'/login'}
            onClick={() => {
              dispatch(loginSliceActions.logoutHandler())
              emptyCart()
            }}>
            {userIsLoggedIn ?
              <GoSignOut
                className={classes['nav-icon']}
              /> :
              <GoSignIn
                className={classes['nav-icon']}
              />}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav;


/*<div className={classes['search']}>*/

/*  <input type='text' className={classes['search-box']} placeholder="search brand, product"/>*/

/*  <button className={classes['search-btn']}>search</button>*/

/*</div>*/

