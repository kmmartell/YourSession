/**
 * @author Kayla Martell
 * @desc Return a list of sessions
 */

import {
  SESSION_UPDATE,
  SESSION_UPDATE_PROP,
  SESSION_CREATE,
  SESSION_SAVE_SUCCESS
} from '../types';

const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch(action.type){

     case SESSION_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
     default:
      return state;
   }
 }
