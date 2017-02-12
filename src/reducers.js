import { combineReducers } from 'redux';
import SessionReducer from './sessions/reducers';
import AuthenticationReducer from './auth/reducers';
import SongReducer from './songs/reducers';

export default combineReducers({
  sessions: SessionReducer,
  songs: SongReducer,
  auth: AuthenticationReducer
});
