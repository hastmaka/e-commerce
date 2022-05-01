import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginSliceActions} from "./login-slice";
import {fetchData} from "../../helper/Api";

import classes from './SignIn.module.css';

/* firebase */
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import {cartSliceActions} from "../cart/cart-slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [forgotPassword, setForgotPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const authentication = getAuth();

    if (email === '' || password === '') {
      alert('check email and pass');
      return;
    }

    if (forgotPassword) {
      setIsLoading(true)
      sendPasswordResetEmail(authentication, email).then(res => {
        alert('A email was send it to you,\nPlease follow instruction to reset Password')
        setEmail('')
        setIsLoading(false)
        setForgotPassword(false)
      }).catch(err => {
        if (err.code === 'auth/user-not-found') {
          alert('User Not Found, Please check spelling')
          setEmail('')
          setIsLoading(false)
        }
      })
    } else {
        /* Sign in */
      setIsLoading(true)
      if (isLogin) {
        signInWithEmailAndPassword(authentication, email, password).then(res => {
          setIsLoading(false)
          setEmail('')
          setPassword('')
          if (res._tokenResponse) {
            // debugger
            setIsLogin(true)
            navigate('/home')
            dispatch(loginSliceActions.loginHandler({
              token: res.user.accessToken,
              email: res.user.email
            }));
            localStorage.setItem('token', res.user.accessToken);
            localStorage.setItem('email', res.user.email);
            fetchData('auth', {}, 'POST', {
              user: 1
            })
          }
        }).catch(err => {
          // debugger
          if (err.code === 'auth/wrong-password') {
            alert('Wrong Password \nPlease check CapsLock')
            setIsLoading(false)
            setPassword('')
          }
          if (err.code === 'auth/user-not-found') {
            alert('Invalid Email \nPlease check you email')
            setIsLoading(false)
            setEmail('')
            setPassword('')
          }
        })
      } else {
        /* Sign Up */
        createUserWithEmailAndPassword(authentication, email, password).then(res => {
          if (res.user) {
            // debugger
            alert('Account Created Successfully')
            setIsLoading(false)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setFirstName('')
            setLastName('')
            setAddress('')
            setPhone('')
            setIsLogin(true)

            dispatch(fetchData('auth', cartSliceActions.cartQuantity, 'POST', {
              user_email: email,
              user_password: password,
              user_address: address,
              user_phone: phone,
              user_first_name: firstName,
              user_last_name: lastName,
              user_firebase_token: res.user.accessToken,
              user_firebase_token_expire: res._tokenResponse.expiresIn

            }))
          }
        }).catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            alert('Email already in use')
            setIsLoading(false)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
          }
        })
      }
    }
  }

  return (
    <div className={classes['login-form-container']}>
      <form onSubmit={handleSubmit} className={classes['login-form']}>

        {forgotPassword ? (
          <>
            <h2 style={{textAlign: 'center'}}>Forgot Password</h2>
            <p className={classes['forgot-pass-help']}>Please enter your email and we send it back to you a recover
              email.</p>
          </>
        ) : (
          <>
            <h2 style={{textAlign: 'center'}}>{isLogin ? 'Log In' : 'Sign Up'}</h2>
          </>)}

        {forgotPassword ? (
          <>
            <div className={classes['login-form-fields']}>
              <input
                id='forgotPass'
                type='email'
                placeholder='Please enter you Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className={classes['login-form-fields']}>
              <input
                id='email'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes['login-form-fields']}>
              <input
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isLogin && 
              <div className={classes['login-form-fields']}>
                  <input
                    id='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                <div className={classes['additional-fields-sign-up']}>
                  <div className={classes['first-last-name']}>
                    <input
                      id='firstName'
                      type="text"
                      placeholder='First Name'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      id='lastName'
                      type="text"
                      placeholder='Last Name'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className={classes.address}>
                    <input
                    id='address'
                    type="text"
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  </div>

                  <div className={classes.phone}>
                    <input
                      id='phone'
                      type="text"
                      placeholder='Phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
            </div>}

            <div className={classes['login-form-fields-links']}>
              <div
                onClick={() => {
                  setForgotPassword(true)
                  setEmail('')
                }
                }>{isLogin ? 'Forgot Pass' : ''}</div>
              <div onClick={() => {
                setIsLogin(false)
                setEmail('')
                setPassword('')
              }}>{isLogin ? 'Create Account' : ''}</div>
            </div>
          </>)}

        <div className={classes['status-message']}>
          {isLoading && <p>Sending Request...</p>}
        </div>

        {forgotPassword ? (
          <div className={classes['login-form-btn']}>
            <button
              className={classes['cancel-btn']}
              onClick={() => {
                setForgotPassword(false)
                setEmail('')
                setPassword('')
              }
              }>Cancel
            </button>
            <button
              type='submit'
              className={classes['login-btn']}>Send
            </button>
          </div>
        ) : (
          <div className={classes['login-form-btn']}>
            {!isLogin &&
              <button
                className={classes['cancel-btn']}
                onClick={() => {
                  setIsLogin(true)
                  setEmail('')
                  setPassword('')
                  setConfirmPassword('')
                  setFirstName('')
                  setLastName('')
                  setAddress('')
                  setPhone('')
                }
                }>Cancel</button>}
            <button
              type='submit'
              className={classes['login-btn']}>{isLogin ? 'Log in' : 'Sign up'}</button>
          </div>)}
      </form>
    </div>
  )
}

export default Login;