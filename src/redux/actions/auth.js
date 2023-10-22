// import { useSelector } from 'react-redux';
import { ALL_POSTS, LOGIN_API, MY_PROFILE, RESEND_CODE, RESET_PASSWORD, SIGNUP_API, VERIFY_ACC } from '../../config/urls';
import { apiGet, apiPost, apiPut } from '../../utils/utils';
import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;

export const userLogin = (data) => {
    return new Promise((resolve, reject)=>{
      apiPost(LOGIN_API, data).then((res)=>{
        resolve(res)
        dispatch(saveUserData(res.data))
      }).catch((error)=>{
        reject(error)
      })
    })
  // dispatch(saveUserData(data));
};
 
export const userSignup = (data) => {
  return apiPost(SIGNUP_API, data,
    {headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'JWT fefege...'
  },}
    )
};

export const resendOTP = (data) => {
  return apiPost(RESEND_CODE, data,
    {headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'JWT fefege...'
  },}
    )
};

export const resetPassword = (data) => {
  return apiPut(RESET_PASSWORD, data,
    {headers: {
      'Content-Type': 'application/json', 
  },}
    )
};

export const verifyAccout = (data) => {
  return apiPut(VERIFY_ACC, data,
    {headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'JWT fefege...'
  },}
    )
};


// AUTHENTICATED 
// USER


export const myProifile = (userToken) => {
  return apiGet(MY_PROFILE, 
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
     },}
    )
};




// POSTS

export const getAllPosts = (userToken) => {
  return apiGet(ALL_POSTS,
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
     },}
    )
};


export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
}