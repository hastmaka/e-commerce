import classes from "./Login.module.scss";
import {useSelector} from "react-redux";

const IsLoading = () => {
    const isLoading = useSelector(store => store.login.isLoading);
    return (
        <div className={classes['status-message']}>
            {isLoading && <p>Sending Request...</p>}
        </div>
    )
}

export default IsLoading;