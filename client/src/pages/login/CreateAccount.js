import classes from "./Login.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {fetchData} from "../../helper/Api";
import {cartSliceActions} from "../cart/cart-slice";
import Button from "../../component/button/Button";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStore = useSelector(store => store.login);
  const {reset, register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {...loginStore.formFields}
  });

  const onSubmit = ({email, password, firstName, lastName, address, phone}) => {
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
      reset();
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
    })
  }

  return (
    <div className={classes['login-form-container']}>
      <form autoComplete='off'  onSubmit={handleSubmit(onSubmit)} className={classes['login-form']}>
        <h2 style={{textAlign: 'center'}}>Create Account</h2>

        <div className={classes['login-form-fields']}>
          <input
            placeholder='Email'
            {...register('email', {
              required: 'Field Required',
              autoComplete: false,
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
        <div className={classes['login-form-fields']}>
          <input
            type="password"
            placeholder='Confirm Password'
            {...register("confirmPassword", {
              required: "Field Required",
              minLength: {
                value: 6,
                message: "min length is 6"
              }
            })}
          />
          {errors.password && <span role="alert">{errors.password.message}</span>}

          <div className={classes['first-last-name']}>
            <input
              placeholder='First Name'
              {...register('firstName', {
                required: 'Field Required',
              })}
            />
            {errors.email && <span role='alert'>{errors.email.message}</span>}

            <input
              placeholder='Last Name'
              {...register('lastName', {
                required: 'Field Required',
              })}
            />
            {errors.email && <span role='alert'>{errors.email.message}</span>}
          </div>

          <div className={classes['login-form-fields']}>
            <input
              placeholder='Address'
              {...register('address', {
                required: 'Field Required',
              })}
            />
            {errors.email && <span role='alert'>{errors.email.message}</span>}
          </div>

          <div className={classes['login-form-fields']}>
            <input
              type='phone'
              placeholder='Phone'
              {...register('phone', {
                required: 'Field Required',
              })}
            />
            {errors.email && <span role='alert'>{errors.email.message}</span>}
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