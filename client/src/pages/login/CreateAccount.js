import classes from "./Login.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {fetchData} from "../../helper/Api";
import Button from "../../component/button/Button";
import {phoneFormat} from "../../helper/Helper";
import {useState} from "react";

const CreateAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStore = useSelector(store => store.login);
    const {reset, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {...loginStore.formFields}
    });

    const [phone, setPhone] = useState('');
    const handleChange = (e) => {
        setPhone(prevState => (phoneFormat(e.target.value, prevState.phone)));
    };

    const onSubmit = ({email, password, confirmPassword, firstName, lastName, address, phone}) => {
        if(password === confirmPassword){
            const authentication = getAuth();
            createUserWithEmailAndPassword(authentication, email, password).then(res => {
                if (res.user) {
                    alert('Account Created Successfully');
                    reset();
                    dispatch(fetchData('api/create', null, 'POST', {
                        user_email: email,
                        user_address: address,
                        user_phone: phone,
                        user_first_name: firstName,
                        user_last_name: lastName,
                        user_uid: res.user.uid
                    }))
                    navigate('/login')
                }
            }).catch(err => {
                reset({email: ''});
                if (err.code === 'auth/email-already-in-use') {
                    alert('Email already in use')
                }
            })
        } else {
            debugger
            alert(`Password Doesn't Match`)
        }
    }

    return (
        <div className={classes['login-form-container']}>
            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className={classes['login-form']}>
                <h2 style={{textAlign: 'center'}}>Create Account</h2>

                <div className={classes['login-form-fields']}>
                    <input
                        {...register('email', {
                            required: 'Field Required',
                            autoComplete: false,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Entered value does not match email format.'
                            }
                        })}
                        placeholder='Email'
                    />
                    {errors.email && <span role='alert'>{errors.email.message}</span>}
                </div>

                <div className={classes['login-form-fields']}>
                    <input
                        {...register("password", {
                            required: "Field Required",
                            minLength: {
                                value: 6,
                                message: "min length is 6"
                            }
                        })}
                        type="password"
                        placeholder='Password'
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}
                </div>
                <div className={classes['login-form-fields']}>
                    <input
                        {...register("confirmPassword", {
                            required: "Field Required",
                            minLength: {
                                value: 6,
                                message: "min length is 6"
                            }
                        })}
                        type="password"
                        placeholder='Confirm Password'
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}

                    <div className={classes['first-last-name']}>
                        <input
                            {...register('firstName', {
                                required: 'Field Required',
                            })}
                            placeholder='First Name'
                        />
                        {errors.firstName && <span role='alert'>{errors.firstName.message}</span>}

                        <input
                            {...register('lastName', {
                                required: 'Field Required',
                            })}
                            placeholder='Last Name'
                        />
                        {errors.lastName && <span role='alert'>{errors.lastName.message}</span>}
                    </div>

                    <div className={classes['login-form-fields']}>
                        <input
                            {...register('address', {
                                required: 'Field Required',
                            })}
                            placeholder='Address'
                        />
                        {errors.address && <span role='alert'>{errors.address.message}</span>}
                    </div>

                    <div className={`${classes['login-form-fields']} ${classes.phone}`}>
                        <input
                            {...register('phone', {
                                required: 'Field Required',
                            })}
                            type='phone'
                            placeholder='Phone'
                            autoComplete='off'
                            value={phone}
                            onChange={e => handleChange(e)}
                        />
                        {errors.phone && <span role='alert'>{errors.phone.message}</span>}
                    </div>


                </div>

                <div className={classes['login-form-btn']}>
                    <NavLink
                        to={'/login'}
                        className={classes['cancel-btn']}
                    >Cancel
                    </NavLink>
                    <Button
                        type='submit'
                        name='Send'
                        ccsClass='success'
                        style={{color: '#f1f1f1', backgroundColor: 'var(--bs-green)'}}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;