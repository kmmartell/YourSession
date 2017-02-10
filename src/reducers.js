import { combineReducers } from 'redux';
import SessionReducer from './sessions/reducers';
import AuthenticationReducer from './auth/reducers';

export default combineReducers({
  sessions: SessionReducer,
  auth: AuthenticationReducer
});
