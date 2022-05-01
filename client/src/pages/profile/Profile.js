import classes from './Profile.module.css';
import {Outlet} from "react-router-dom";

import Li from "../../component/mainView/navbar/link/Li";

const profileLinks = [
  {to: 'general', name: 'General'},
  {to: 'yourOrder', name: 'Your Orders'},
  {to: 'loginAndSecurity', name: 'Login and Security'},
  {to: 'yourPayments', name: 'Your Payments'},
  {to: 'yourMessages', name: 'Your Messages'},
  {to: 'archivedOrders', name: 'Archived Orders'},
  {to: 'wishList', name: 'Wish List'}
]

const Profile = () => {
  return (
    <div className={classes['user-profile-bg']}>
      <div className={classes['user-profile-content']}>
        <p className={classes['user-profile-title']}>Your User Profile</p>

        <div className={classes['user-profile-content-fix']}>
          <ul className={classes['user-profile-left']}>
            {profileLinks.map(pLink =>
              <Li
                key={pLink.name}
                title={pLink.name}
                href={pLink.to}
              />
            )}
          </ul>

          <div className={classes['user-profile-right']}>
            <Outlet/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile;


