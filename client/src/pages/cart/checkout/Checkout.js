import classes from './Checkout.module.scss';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Input from "../../../component/input/Input";

const Checkout = () => {
    const user = useSelector(store => store.login.user);
    const [tempUser, setTempUser] = useState();
    useEffect(() => {
        let t = setTimeout(() => setTempUser({
            name: `${user.user_first_name} ${user.user_last_name}`,
            email: user.user_email,
            phone: user.user_phone,
            contry: '',
            state: '',
            town: '',
            address: user.address
        }), 100);
        return () => {
            clearTimeout(t)
        }
    }, [user]);

    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    // debugger
    const items = [{
        name: 'email',
        value: tempUser?.email,
        patternValue: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format.'
    }, {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
        minLengthValue: 6,
        minLengthMessage: 'Min length is 6',
    }]

    const onSubmit = (data) => {
        debugger
    }

    return (
        <div className={classes['checkout-container']}>
            <div className={classes['billing-detail']}>
                <h4 className={`text-uppercase`}>billing details</h4>
                {tempUser && <form onSubmit={handleSubmit(onSubmit)}>
                    {items.map(item =>
                        <Input
                            key={item.name}
                            errors={errors}
                            register={register}
                            required={true}
                            value={item.value}
                            width={100}
                            placeholder={item.placeholder}
                            label={item.name}
                            type={item.type}
                            ccsClass={item.disabled ? 'disabled' : ''}
                            patternValue={item.patternValue}
                            patternErrorMessage={item.message}
                            minLengthValue={item.minLengthValue}
                            minLengthMessage={item.minLengthMessage}
                        />
                    )}

                    <button type='submit'>click</button>
                </form>}
                {!tempUser && <div>No user</div>}
            </div>
            <div>a</div>
        </div>
    )
}

export default Checkout;