import {createSlice} from "@reduxjs/toolkit";

const initialToken = localStorage.getItem('token');
// const expireIn = localStorage.getItem('expireIn');

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    token: initialToken,
    expireIn: '',
    formFields: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
    },
    isLoading: false
    // expireIn: expireIn
  },
  reducers: {
    loginHandler(state, action) {
      const userData = action.payload.data.user;
      return {
        ...state,
        token: userData.user_firebase_token,
        expireIn: userData.user_firebase_token_expire,
        user: userData,
        formFields: {
          ...state.formFields,
          email: userData.user_email,
          firstName: userData.user_first_name,
          lastName: userData.user_first_name,
          address: userData.user_address,
          phone: userData.user_phone
        }
      }
    },

    logoutHandler(state) {
      localStorage.removeItem('token')
      return {
        ...state,
        token: '',
        formFields: {
          ...state.formFields,
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
        }
      }
    },

    isLoadingToggle(state) {
      state.isLoading = !state.isLoading
    },
  }
})

export const loginSliceActions = loginSlice.actions;
export default loginSlice.reducer;