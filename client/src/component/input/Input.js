import classes from './Input.module.scss';
import {phoneFormat} from "../../helper/Helper";
import {useState} from "react";

const Input = ({ label, register, type, errors, required, value, ...rest}) => {
    // debugger
    const [phone, setPhone] = useState('');

    return (
        <div className={classes['input-container']}>
            <input
                {...register(label, {
                    value: label === 'phone' ? phone : value,
                    disabled: rest.disable,
                    required: rest.disable ? '' : required ? 'Field Required' : '',
                    pattern: {
                        value: rest.patternValue ? rest.patternValue : '',
                        message: rest.patternValue ? rest.patternErrorMessage : ''
                    },
                    minLength: {
                        value: rest.minLengthValue ? rest.minLengthValue : '',
                        message: rest.minLengthValue ? rest.minLengthMessage : ''
                    },
                    // validate: {
                    //     equal: rest.validateEqualTo ? (v => v.length === 0 || 'hello') : ''
                    // },
                    onChange: (e) => {
                        if(e.target.name === 'phone') {
                            // debugger
                            setPhone(prevState => (phoneFormat(e.target.value, prevState)))
                        }
                        if (rest.checkHandler) {
                            rest.checkHandler(e)
                        }
                    }
                })}
                className={rest.disable ? classes.disabled : ''}
                type={type ? type : 'text'}
                style={rest.style}
                placeholder={rest.placeholder ? rest.placeholder : value}
            />
            {(type !== 'undefined' && type === 'checkbox') && <label>{rest.innerHtml}</label>}
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
