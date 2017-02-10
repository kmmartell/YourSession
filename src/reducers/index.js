import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import AuthenticationReducer from './AuthenticationReducer';

export default combineReducers({
  sessions: SessionReducer,
  auth: AuthenticationReducer
});
