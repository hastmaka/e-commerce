// import classes from './test.module.scss';
// import {useState} from "react";
// import {phoneFormat} from "../../helper/Helper";
//
// const Input_test = ({value, patternValue, errors, placeholder, ccsClass, register, label, required, message, width}) => {
//     // debugger
//     const [phone, setPhone] = useState('');
//     const [tempState, setTempState] = useState({});
//     const handleChange = (e) => {
//         setPhone(prevState => (phoneFormat(e.target.value, prevState.phone)));
//         setTempState(e.target.value);
//     };
//
//     return (
//         <div className={classes['input-container']}>
//             <input
//                 {...register(label, {
//                     required: 'Field Required',
//                     pattern: {
//                         value: patternValue ? patternValue : '',
//                         message: patternValue ? message : ''
//                     }
//                 })}
//                 className={ccsClass ? `${classes[`${ccsClass}`]}` : label ? `${classes[`${label}`]}` : ''}
//                 style={{width: `${width}.%`}}
//                 value={
//                     label === 'phone' ? phone :
//                     label === 'address' ? tempState.address :
//                     label === 'name' ? tempState.name :
//                     label === 'email' ? tempState.email :
//                     value
//                 }
//                 onChange={e => handleChange(e)}
//                 size='sm'
//                 placeholder={placeholder}
//             />
//             {errors[`${label}`] && <span role='alert'>{errors[`${label}`].message}</span>}
//         </div>
//     );
// }
//
// export default Input_test;