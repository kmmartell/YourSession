import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  LOGIN_DETAILS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './actionTypes';

export const loginDetailsChanged = ({ prop, value }) => {
  return {
    type: LOGIN_DETAILS_CHANGED,
    payload: {prop, value}
  };
}



export const loginUser = ({ email, password }) => {
  Actions.main();
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
