/**
 * @author Kayla Martell
 * @desc Return a list of songs for a session
 */

import {
  SONGS_FETCH_SUCCESS
} from '../types';

const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch(action.type){
     case SONGS_FETCH_SUCCESS:
        return state;
     default:
      return state;
   }
 }
