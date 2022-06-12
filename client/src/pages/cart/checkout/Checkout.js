import classes from './Checkout.module.scss';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

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

    const onSubmit = (data) => {
        debugger
    }

    return (
        <div className={classes['checkout-container']}>
            <div className={classes['billing-detail']}>
                <h4 className={`text-uppercase`}>billing details</h4>
                {tempUser && <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            placeholder='You name here...'
                            {...register('name', {
                                required: 'Field Required',
                                value: tempUser.name
                            })}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='You email here...'
                            {...register('email', {
                                required: 'Field Required',
                                value: tempUser.email,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Entered value does not match email format.'
                                }
                            })}
                        />
                        {errors.email && <span role='alert'>{errors.email.message}</span>}
                    </div>

                    <button type='submit'>click</button>
                </form>}
                {!tempUser && <div>No user</div>}
            </div>
            <div>a</div>
        </div>
    )
}

export default Checkout;