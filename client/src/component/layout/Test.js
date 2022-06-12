import classes from './test.module.scss';
import Input_test from "./Input_test";
import {useForm} from "react-hook-form";

const items = [
    {name: 'name', value: 'Name', placeholder: 'Enter your Name...'},
    {name: 'phone', value: 'test', placeholder: 'Enter your Phone...'},
    {name: 'address', value: 'Address', placeholder: 'Enter your Address...'},
    {
        name: 'email',
        value: 'Email',
        placeholder: 'Enter your Email...',
        patternValue: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format.'
    },
]

const Test = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
      debugger
    }
    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                {items.map(item =>
                    <Input_test
                        key={item.name}
                        errors={errors}
                        register={register}
                        required={true}
                        width={20}
                        message={item.message}
                        placeholder={item.placeholder}
                        patternValue={item.patternValue}
                        label={item.name}
                        value={item.value}
                        ccsClass={item.disabled ? 'disabled' : ''}
                    />
                )}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Test;