import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FB_USER_DATA_SUCCESS,
  FB_USER_DATA_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case FB_USER_DATA_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: true,
        uid: action.payload.uid,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: true,
      });
    case FB_USER_DATA_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
        uid: null,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
      });
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: true,
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
      });
    default:
      return state;
  }
};

export default authReducer;
