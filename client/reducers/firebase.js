import {
  FIREBASE_CONFIG_REQUEST,
  FIREBASE_CONFIG_SUCCESS,
  FIREBASE_CONFIG_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const firebaseReducer = (state = initialState.firebase, action) => {
  switch (action.type) {
    case FIREBASE_CONFIG_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case FIREBASE_CONFIG_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
      });
    case FIREBASE_CONFIG_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        initialized: false,
      });
    default:
      return state;
  }
};

export default firebaseReducer;
