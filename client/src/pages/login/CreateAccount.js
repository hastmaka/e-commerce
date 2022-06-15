import classes from "./Login.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {fetchData} from "../../helper/Api";
import Button from "../../component/button/Button";
import Input from "../../component/input/Input";

const items = [{
    name: 'email',
    placeholder: 'Email',
    patternValue: /\S+@\S+\.\S+/,
    message: 'Entered value does not match email format.'
}, {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    minLengthValue: 6,
    minLengthMessage: 'Min length is 6'
}, {
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
    minLengthValue: 6,
    minLengthMessage: 'Min length is 6'
},
    {name: 'firstName', placeholder: 'First Name'},
    {name: 'lastName', placeholder: 'Last Name'},
    {name: 'address', placeholder: 'Address'},
    {name: 'phone', placeholder: 'Phone'}
]

const CreateAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStore = useSelector(store => store.login);
    const {reset, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {...loginStore.formFields}
    });

    const onSubmit = ({email, password, confirmPassword, firstName, lastName, address, phone}) => {
        debugger
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

                {items.map(item =>
                    <Input
                        key={item.name}
                        errors={errors}
                        register={register}
                        required={true}
                        style={{'width': '100%'}}
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