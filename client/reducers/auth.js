import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
      });
    default:
      return state;
  }
};

export default authReducer;
