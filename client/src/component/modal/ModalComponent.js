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
            size="md"
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
                            key={item.name}
                            errors={errors}
                            register={register}
                            required={true}
                            disable={item.disabled}
                            width={100}
                            placeholder={item.placeholder}
                            value={item.value}
                            label={item.name}
                            type={item.type}
                            patternValue={item.patternValue}
                            patternErrorMessage={item.message}
                            minLengthValue={item.minLengthValue}
                            minLengthMessage={item.minLengthMessage}
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