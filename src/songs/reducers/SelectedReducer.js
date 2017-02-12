/**
 * @author Kayla Martell
 * @desc Handle state changes for selected song
 */

import {
  SONG_UPDATE,
  SONG_UPDATE_PROP,
  SONG_CREATE,
  SONG_SAVE_SUCCESS
} from '../types';

const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch(action.type){
     case SONG_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
     default:
      return state;
   }
 }
