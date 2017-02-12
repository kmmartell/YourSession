/**
 * @author Kayla Martell
 * @desc Handle all actions for sessiosn
 */

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  SESSION_UPDATE,
  SESSION_UPDATE_PROP,
  SESSION_CREATE,
  SESSIONS_FETCH_SUCCESS,
  SESSION_SAVE_SUCCESS,
  SESSION_SAVE_FAIL
} from './types';

console.log('FIREBSAE in ACTIONS', firebase);

/** Database for function use  **/

/**
 * sessionsFetch Get all sessions from firebase
 * @return action
 */
export const fetchSessions = () => {
  const db = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    db.ref(`/users/${currentUser.uid}/sessions`)
      .on('value', snapshot => { //Snapshot has handle to all sessions
        dispatch({
          type: SESSIONS_FETCH_SUCCESS,
          payload: snapshot.val() // Val is actual snapshots
        })
      })
  }
}

/**
 * @param prop: property of session to update
 * @param value: value of the property of a session to update
 */

export const sessionUpdateProp = ({ prop, value }) => {
  return {
    type: SESSION_UPDATE_PROP,
    payload: { prop, value}
  }
}

/**
 * sessionUpdate Update an existing session with all values
 * @param name: The session name
 * @param notes: Any notes for the session
 */
export const sessionUpdate = ({ uid, name, notes }) => {
  return {
    type: SESSION_UPDATE,
    payload: { name, notes }
  }
}

/**
 * sessionCreate Create a new session in firebase
 * @param name: The session name
 * @param notes: Any notes for the session
 */
export const sessionCreate = ({ name, notes }) => {
  const db = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    db.ref(`/users/${currentUser.uid}/sessions`)
      .push({ name, notes })
      .then(() => sessionSaveSuccess(dispatch))
      .catch(() => sessionSaveFail(dispatch));
  }
}

/**
 * sessionSave Save the session to firebase
 * @param  string  name  Name of the session
 * @param  string  notes  Description of the session
 * @param  int uid  Unique identifier of session
 * @return action  dispatch action via redux thunk
 */
export const sessionSave = ({ name, notes, uid }) => {
  const db = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    db.ref(`/users/${currentUser.uid}/sessions/${uid}`)
    .set({ name, notes })
    .then(() => sessionSaveSuccess(dispatch))
    .catch(() => sessionSaveFail(dispatch));
  }

}


/**** HELPER FUNCTIONS *****/

/* Dispatch success message on saving a session */
const sessionSaveSuccess = dispatch  => {
  // Navigation to back to the list of sessions and do not display a back button
  Actions.sessionList({ type: 'reset' });
  dispatch({
    type: SESSION_SAVE_SUCCESS
  });
}

/* Dispatch error message on catch/fail of session save  */
const sessionSaveFail = dispatch => {
  dispatch({
    type: SESSION_SAVE_FAIL
  })
}
