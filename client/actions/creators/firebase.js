import axios from 'axios';
import firebase from 'firebase';

import {
  FIREBASE_CONFIG_REQUEST,
  FIREBASE_CONFIG_SUCCESS,
  FIREBASE_CONFIG_FAILURE,
  FB_USER_DATA_SUCCESS,
  FB_USER_DATA_FAILURE,
} from '../types';

function authHandler(dispatch) {
  return (user) => {
    if (user) {
      const {
        displayName,
        email,
        emailVerified,
        photoURL: photoUrl,
        isAnonymous,
        uid,
      } = user;

      dispatch({
        type: FB_USER_DATA_SUCCESS,
        payload: {
          displayName,
          email,
          emailVerified,
          photoUrl,
          isAnonymous,
          uid,
        },
      });
    } else {
      dispatch({
        type: FB_USER_DATA_FAILURE,
      });
    }
  };
}

function initFirebase(config) {
  return (dispatch) => {
    const app = firebase.initializeApp(config);
    window.firebase = app;

    dispatch({
      type: FIREBASE_CONFIG_SUCCESS,
    });

    app.auth().onAuthStateChanged(authHandler(dispatch));
  };
}

export function getFirebaseConfig() {
  return async (dispatch) => {
    dispatch({
      type: FIREBASE_CONFIG_REQUEST,
    });

    try {
      const response = await axios({
        method: 'GET',
        url: '/api/firebase',
      });

      const { data } = response.data;

      initFirebase(data)(dispatch);
    } catch (err) {
      const errMsg = err.response;
      console.log(errMsg);
      dispatch({
        type: FIREBASE_CONFIG_FAILURE,
      });
    }
  };
}
