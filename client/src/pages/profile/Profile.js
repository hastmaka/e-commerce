import classes from './Profile.module.scss';
import {Outlet} from "react-router-dom";
import LiProfile from "./LiProfile";

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
                <p className={classes['user-profile-title']}>Account Details</p>

                <div className={classes['user-profile-content-fix']}>
                    <ul className={classes['user-profile-left']}>
                        {profileLinks.map(pLink =>
                            <LiProfile
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


