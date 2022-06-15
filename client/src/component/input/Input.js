import classes from './Input.module.scss';
import {phoneFormat} from "../../helper/Helper";
import {useState} from "react";

const Input = ({
    label,
    innerHtml,
    value,
    disable,
    checkHandler,
    type,
    errors,
    placeholder,
    register,
    required,
    style,
    patternValue,
    patternErrorMessage,
    minLengthValue,
    minLengthMessage
}) => {
    // debugger
    const [phone, setPhone] = useState('');
    const [tempState, setTempState] = useState({});
    const handleChange = (e) => {
        setPhone(prevState => (phoneFormat(e.target.value, prevState.phone)));
        setTempState(e.target.value);
    };

    return (
        <div className={classes['input-container']}>

            <input
                {...register(label, {
                    required: disable ? '' : required ? 'Field Required' : '',
                    pattern: {
                        value: patternValue ? patternValue : '',
                        message: patternValue ? patternErrorMessage : ''
                    },
                    minLength: {
                        value: minLengthValue ? minLengthValue : '',
                        message: minLengthValue ? minLengthMessage : ''
                    }
                })}
                className={disable ? classes.disabled : ''}
                style={style}
                value={
                    label === 'email' ? tempState.email :
                    label === 'password' ? tempState.password :
                    label === 'confirmPassword' ? tempState.confirmPassword :
                    label === 'firstName' ? tempState.firstName :
                    label === 'lastName' ? tempState.lastName :
                    label === 'phone' ? phone :
                    label === 'address' ? tempState.address :
                    label === 'name' ? tempState.name : value

                }
                disabled={disable}
                onChange={e => {
                    handleChange(e)
                    if (checkHandler) {
                        checkHandler(e)
                    }
                }}
                type={type ? type : 'text'}
                placeholder={placeholder ? placeholder : value}
            />
            {type === 'checkbox' && <label>{innerHtml}</label>}
            {errors[`${label}`] && <span role='alert'>{errors[`${label}`].message}</span>}
        </div>
    );
}

export default Input;

/* how to use it */
/*

key={item.name}
errors={errors} - passing the error parameter from useForm
register={register} - register from useForm
required={true} - boolean in case u want the field mandatory
width={20} - can be dynamic or fix for all same size
placeholder={item.placeholder} - placeholder
value={item.value}
label={item.name} - name which it's going to be registered on useForm (always lowercase)
type={item.type} - type of input
ccsClass={item.disabled ? 'disabled' : ''} - in case u want the field only read
patternValue={item.patternValue} - pattern the field has to fulfill
patternErrorMessage={item.patternErrorMessage} - in case of pattern error this is the message to show
minLengthValue={item.minLengthValue} - min length value
minLengthMessage={item.minLengthMessage} - min length value message

*/