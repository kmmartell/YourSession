/**
 * @author Kayla Martell
 * @desc Return a list of sessions
 */

import {
  SESSIONS_FETCH_SUCCESS
} from '../types';

const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch(action.type){
     case SESSIONS_FETCH_SUCCESS:
        return state;
     default:
      return state;
   }
 }
