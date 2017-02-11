import {
  LOGIN_USER,
  LOGIN_DETAILS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case LOGIN_DETAILS_CHANGED:
      return {...state, [action.payload.prop]:action.payload.value };
    case LOGIN_USER_SUCCESS:
      console.log('User successfully logged in ');
      return {...state, error: '', user: action.payload, loading:false };
    case LOGIN_USER_FAIL:
      console.log('User could not login');
      return {...state, error: 'Could not sign in', user: null, loading:false};
    case LOGIN_USER:
      return { ...state, error: '', loading:true };
    default:
      return state;
  }

}
