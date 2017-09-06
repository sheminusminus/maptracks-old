import axios from 'axios';
import firebase from 'firebase';

import {
  FIREBASE_CONFIG_REQUEST,
  FIREBASE_CONFIG_SUCCESS,
  FIREBASE_CONFIG_FAILURE,
  FB_USER_DATA_SUCCESS,
  FB_USER_DATA_FAILURE,
  DB_USER_DATA_REQUEST,
  DB_USER_DATA_SUCCESS,
  DB_USER_DATA_FAILURE,
  SAVE_CORRELATED_REQUEST,
  SAVE_CORRELATED_SUCCESS,
  SAVE_CORRELATED_FAILURE,
  SAVE_MASS_CORRELATED_REQUEST,
  SAVE_MASS_CORRELATED_SUCCESS,
  SAVE_MASS_CORRELATED_FAILURE,
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

export function getSpotifyRecent(userId) {
  return async (dispatch) => {
    dispatch({
      type: DB_USER_DATA_REQUEST,
    });

    const db = window.firebase.database();
    db.ref(`users/${userId}/spotify/recent`).once('value').then((snapshot) => {
      console.log(snapshot);

      dispatch({
        type: DB_USER_DATA_SUCCESS,
        payload: snapshot.val(),
      });
    }).catch((err) => {
      console.log(err);
      dispatch({
        type: DB_USER_DATA_FAILURE,
      });
    });
  };
}

export function saveCorrelatedLocations(userId, locations) {
  return async (dispatch) => {
    dispatch({
      type: SAVE_CORRELATED_REQUEST,
    });

    const db = window.firebase.database();

    const userLocsRef = db.ref(`users/${userId}/locations`);
    userLocsRef.transaction((locData) => {
      if (locData) {
        return locData.concat(locations);
      }

      return locations;
    }, (err, success, data) => {
      console.log(err, success, data, data ? data.val() : '');

      if (err) {
        dispatch({
          type: SAVE_CORRELATED_FAILURE,
        });
      } else if (success) {
        dispatch({
          type: SAVE_CORRELATED_SUCCESS,
          payload: data.val(),
        });
      }
    });

    dispatch({
      type: SAVE_MASS_CORRELATED_REQUEST,
    });

    const locsRef = db.ref('locations');
    locsRef.transaction((locData) => {
      if (locData) {
        return locData.concat(locations);
      }

      return locations;
    }, (err, success, data) => {
      console.log(err, success, data, data ? data.val() : '');

      if (err) {
        dispatch({
          type: SAVE_MASS_CORRELATED_FAILURE,
        });
      } else if (success) {
        dispatch({
          type: SAVE_MASS_CORRELATED_SUCCESS,
          payload: data.val(),
        });
      }
    });
  };
}
