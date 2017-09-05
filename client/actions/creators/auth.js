import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../types';

export function login(email, password) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const auth = window.firebase.auth();

    try {
      auth.signInWithEmailAndPassword(email, password);

      dispatch({
        type: LOGIN_SUCCESS,
      });
    } catch (err) {
      console.log(err, err.code, err.message);
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };
}

export function register(email, password) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const auth = window.firebase.auth();

    try {
      auth.createUserWithEmailAndPassword(email, password);

      dispatch({
        type: REGISTER_SUCCESS,
      });
    } catch (err) {
      console.log(err, err.code, err.message);
      dispatch({
        type: REGISTER_FAILURE,
      });
    }
  };
}

export function logout(email, password) {
  return async (dispatch) => {
    const auth = window.firebase.auth();

    try {
      auth.signOut();

      dispatch({
        type: LOGOUT_REQUEST,
      });
    } catch (err) {
      console.log(err, err.code, err.message);
      dispatch({
        type: LOGOUT_FAILURE,
      });
    }
  };
}
