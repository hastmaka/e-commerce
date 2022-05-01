import classes from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import IsLoading from './IsLoading';
import {useForm} from 'react-hook-form';

/* firebase */
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {loginSliceActions} from './login-slice';
import {fetchData} from "../../helper/Api";
import {cartSliceActions} from "../cart/cart-slice";
import Button from "../../component/mainView/button/Button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStore = useSelector(store => store.login);
  const {reset, register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      email: loginStore.formFields.email,
      password: loginStore.formFields.password,
    }
  });

  const onSubmit = ({email, password}) => {
    // debugger
    const authentication = getAuth();
    dispatch(loginSliceActions.isLoadingToggle());
    signInWithEmailAndPassword(authentication, email, password).then(res => {
        dispatch(loginSliceActions.isLoadingToggle());
      if (res.user) {
        reset();
        dispatch(fetchData('api/auth/login', loginSliceActions.loginHandler, 'POST', {
          user: res._tokenResponse
        }, null, (data) => {
          dispatch(cartSliceActions.cartQuantity({data: data.data.cart}))

        }))
        navigate('/home')
        localStorage.setItem('token', res.user.accessToken);
      }
    }).catch(err => {
      if (err.code === 'auth/wrong-password') {
        alert('Wrong Password \nPlease check CapsLock')
        reset({password: ''});
      }
      if (err.code === 'auth/user-not-found') {
        alert('Invalid Email \nPlease check you email')
        reset();
      }
    })

  }

  return (
    <div className={classes['login-form-container']}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes['login-form']}>
        <h2 style={{textAlign: 'center'}}>Log In</h2>
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
        <div className={classes['login-form-fields']}>
          <input
            type="password"
            placeholder='Password'
            {...register("password", {
              required: "Field Required",
              minLength: {
                value: 6,
                message: "min length is 6"
              }
            })}
          />
          {errors.password && <span role="alert">{errors.password.message}</span>}
        </div>

        <div className={classes['login-form-fields-links']}>
          <NavLink to={'/forgotPassword'}>Forgot Pass</NavLink>
          <NavLink to={'/createAccount'}>Create Account</NavLink>
        </div>

        {loginStore.isLoading && <IsLoading/>}

        <div className={classes['login-form-btn']}>
          <Button
            type='submit'
            name='Log In'
            ccsClass='success'
            style={{color: '#f1f1f1', backgroundColor: 'var(--bs-green)'}}
          />
        </div>


      </form>
    </div>
  )
}

export default Login;