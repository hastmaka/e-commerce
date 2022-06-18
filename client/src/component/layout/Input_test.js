// import {useController} from "react-hook-form";
//
//
// const Input_Test = (props) => {
//     const { field, fieldState } = useController(props);
//
//     return (
//         <div>
//             <input {...field} placeholder={props.name} />
//             <p>{fieldState.isTouched && "Touched"}</p>
//             <p>{fieldState.isDirty && "Dirty"}</p>
//             <p>{fieldState.invalid ? "invalid" : "valid"}</p>
//         </div>
//     );
// }
//
// export default Input_Test;

import React from "react";
import { useForm } from "react-hook-form";

// export function Form({ defaultValues, children, onSubmit }) {
//     // debugger
//     const { handleSubmit, register, formState: {errors} } = useForm({ defaultValues });
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {Array.isArray(children)
//                 ? children.map((child) => {
//                     // debugger
//                     return child.props.name
//                         ? React.createElement(child.type, {
//                             ...{
//                                 ...child.props,
//                                 register,
//                                 errors,
//                                 key: child.props.name
//                             }
//                         })
//                         : child;
//                 })
//                 : React.createElement(children.type, {
//                     ...{
//                         ...children.props,
//                         register,
//                         errors,
//                         key: children.props.name
//                     }
//                 })}
//         </form>
//     );
// }

export function Input({ register, name, type, ...rest }) {
    // debugger
    switch (type) {
        case 'text':
            return (
                <input
                    {...register(name)} {...rest} />
            );
        default:
            return null;
    }

}

export function Select({ register, options, name, ...rest }) {
    return (
        <select {...register(name)} {...rest}>
            {options.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </select>
    );
}