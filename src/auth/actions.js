import firbase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './actionTypes';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
}


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
      dispatch({type: LOGIN_USER });
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
  }
}

const loginUserFail = (dispatch) => {
  return {
    type: LOGIN_USER_FAIL
  };
}

const loginUserSuccess = (dispatch, user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  };
}
