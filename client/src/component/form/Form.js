import classes from './Form.module.scss';
import {useForm} from "react-hook-form";
import React from "react";

const Form = ({ defaultValues, children, onSubmit }) => {
    debugger
    const {handleSubmit, register, formState: {errors} } = useForm({ defaultValues });
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes['login-form']}>
            {Array.isArray(children)
                ? children.map((child) => {
                    // debugger
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                errors,
                                key: child.props.name
                            }
                        })
                        : child;
                })
                : React.createElement(children.type, {
                    ...{
                        ...children.props,
                        register,
                        errors,
                        key: children.props.name
                    }
                })}
        </form>
    );
}

export default Form;