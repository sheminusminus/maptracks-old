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

    console.log('login', email, password);

    try {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } catch (err) {
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

    console.log('register', email, password);

    try {
      dispatch({
        type: REGISTER_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAILURE,
      });
    }
  };
}
