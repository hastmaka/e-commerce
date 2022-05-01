import {useSelector} from "react-redux";
import classes from "./ProfileGeneral.module.css";
import {useState} from "react";
import ModalComponent from "../../../component/modal/ModalComponent";
import Button from "../../../component/button/Button";

const ProfileGeneral = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(store => store.login.user);
  const items = [
    {name: 'First Name', user: `${user.user_first_name} ${user.user_last_name}`},
    {name: 'Email', user: user.user_email},
    {name: 'Phone', user: user.user_phone},
    {name: 'Address', user: user.user_address}
  ];

  const handleTempData = (data) => {
    debugger
    setShowModal(true)
  }


  return (
    <>
      <ModalComponent
        show={showModal}
        onHide={() => setShowModal(false)}
      />
          <div className={classes['btn-container']}>
            <Button
              name='Edit'
              handler={() => handleTempData(items)}
            />
          </div>
      {items.map(item =>
        <div key={item.name} className={classes['profile-general-list']}>
          <div>
            <span>{item.name}: </span>
            <span>{item.user}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileGeneral;