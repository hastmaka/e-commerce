import {useSelector} from "react-redux";
import classes from "./ProfileGeneral.module.css";
import {useState} from "react";
import ModalComponent from "../../../component/modal/ModalComponent";

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
    // debugger
    setShowModal(true)
  }


  return (
    <>
      <ModalComponent
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      {items.map(item =>
        <div key={item.name} className={classes['profile-general-list']}>
          <div>
            <span>{item.name}: </span>
            <span>{item.user}</span>
          </div>
          <div>
            <button
              onClick={(e) => handleTempData(items)}
            >Edit</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileGeneral;