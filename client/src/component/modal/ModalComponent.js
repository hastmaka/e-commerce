import {Modal} from "react-bootstrap";
import Button from "../button/Button";
import Input from "../input/Input";
import {useForm} from 'react-hook-form';
import {useSelector} from "react-redux";

const ModalComponent = ({show, title, onHide}) => {
  const items = useSelector(store => store.modal.tempData)
  // debugger
  const {reset, register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    reset();
    debugger
  }

  const onCancel = () => {
    reset();
  }

  return (
    <Modal
      show={show}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          {items.length > 0 && items.map(item =>
            <Input
              register={register}
              required
              label={item.name}
              key={item.name}
              iconName={item.name}
              value={item.value}
              ccsClass={item.disabled ? 'disabled' : ''}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            ccsClass='danger'
            name='Close'
            style={{backgroundColor: '#bb2a3d'}}
            handler={() => {
              onHide();
              onCancel()
            }}
          />
          <Button
            type='submit'
            ccsClass='success'
            name='Save'
            style={{backgroundColor: '#2abb69'}}
          />
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default ModalComponent;