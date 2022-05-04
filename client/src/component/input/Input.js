import classes from './Input.module.css';
import {FormControl, InputGroup} from "react-bootstrap";
import {phoneFormat} from "../../helper/Helper";
import {useState} from "react";

const Input = ({value, placeholder, iconName, ccsClass, register, label, required}) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const handleChange = (e) => {
    setPhone(prevState => (phoneFormat(e.target.value, prevState.phone)));
    setAddress(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text
        className={classes['input-group-text']}
      >{iconName}</InputGroup.Text>

      <FormControl
        {...register(label, {required})}
        className={classes[`${ccsClass}`]}
        value={
          iconName === 'Phone' ? phone :
            iconName === 'Address' ? address :
              value
        }
        onChange={e => handleChange(e)}
        size='sm'
        placeholder={
          iconName === 'Phone' ||
          iconName === 'Address' ?
            value :
            placeholder
        }
      />
    </InputGroup>
  );
}

export default Input;