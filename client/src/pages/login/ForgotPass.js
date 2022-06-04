import classes from "./Login.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import IsLoading from "./IsLoading";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {loginSliceActions} from "./login-slice";
import Button from "../../component/button/Button";


const ForgotPass = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStore = useSelector(store => store.login);
    const {reset, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: loginStore.formFields.email,
        }
    });
    const onSubmit = ({email}) => {
        const authentication = getAuth();
        dispatch(loginSliceActions.isLoadingToggle());
        sendPasswordResetEmail(authentication, email).then(res => {
            dispatch(loginSliceActions.isLoadingToggle());
            alert('A email was send it to you,\nPlease follow instruction to reset Password');
            reset();
            navigate('/login')
        }).catch(err => {
            dispatch(loginSliceActions.isLoadingToggle());
            if (err.code === 'auth/user-not-found') {
                alert('User Not Found, Please check spelling');
                reset();
            }
        })
    }

    return (
        <div className={classes['login-form-container']}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes['login-form']}>
                <h2 style={{textAlign: 'center'}}>Forgot Password</h2>
                <p className={classes['forgot-pass-help']}>Please enter your email and we send it back to you a recover
                    email.</p>

                <div className={classes['login-form-fields']}>
                    <input
                        placeholder='Email'
                        {...register('email', {
                            required: 'Field Required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Entered value does not match email format.'
                            }
                        })}
                    />
                    {errors.email && <span role='alert'>{errors.email.message}</span>}
                </div>

                {loginStore.isLoading && <IsLoading/>}

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

export default ForgotPass;