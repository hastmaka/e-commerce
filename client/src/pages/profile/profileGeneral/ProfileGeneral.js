import {useDispatch, useSelector} from "react-redux";
import classes from "./ProfileGeneral.module.css";
import {useState} from "react";
import ModalComponent from "../../../component/modal/ModalComponent";
import Button from "../../../component/button/Button";
import {modalSliceActions} from "../../../component/modal/modal-slice";

const ProfileGeneral = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(store => store.login.user);
    const items = [{
        name: 'name',
        value: `${user.user_first_name} ${user.user_last_name}`,
        disabled: true
    }, {
        name: 'email',
        value: user.user_email,
        disabled: true
    }, {
        name: 'phone',
        value: user.user_phone,
        disabled: false
    }, {
        name: 'address',
        value: user.user_address,
        disabled: false
    }];

    const handleTempData = () => {
        setShowModal(true);
        dispatch(modalSliceActions.setTemData(items))
    }


    return (
        <>
            <ModalComponent
                show={showModal}
                title='Profile Information'
                onHide={() => setShowModal(false)}
            />
            <div className={classes['btn-container']}>
                <Button
                    name='Edit'
                    handler={() => handleTempData()}
                />
            </div>
            {items.map(item =>
                <div key={item.name} className={classes['profile-general-list']}>
                    <span>{item.name}: {item.value}</span>
                </div>
            )}
        </>
    )
}

export default ProfileGeneral;