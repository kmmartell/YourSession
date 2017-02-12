/**
 * @author Kayla Martell
 * @desc Combine all the session reducers
 */

import { combineReducers } from 'redux';
import SelectedReducer from './SelectedReducer';
import SessionsReducer from './SessionsReducer';

export default combineReducers({
  all: SessionsReducer,
  selected: SelectedReducer
});
