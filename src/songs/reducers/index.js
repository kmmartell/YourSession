/**
 * @author Kayla Martell
 * @desc Combine all the session reducers
 */

import { combineReducers } from 'redux';
import SelectedReducer from './SelectedReducer';
import SongsReducer from './SongsReducer';

export default combineReducers({
  all: SongsReducer,
  selected: SelectedReducer
});
