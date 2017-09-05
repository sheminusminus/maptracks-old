import {
  FIREBASE_DATA_REQUEST,
  FIREBASE_DATA_SUCCESS,
  FIREBASE_DATA_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const firebaseReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case FIREBASE_DATA_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case FIREBASE_DATA_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        apiKey: action.payload.apiKey,
        authDomain: action.payload.authDomain,
        databaseURL: action.payload.databaseURL,
        projectId: action.payload.projectId,
        storageBucket: action.payload.storageBucket,
        messagingSenderId: action.payload.messagingSenderId,
      });
    case FIREBASE_DATA_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
      });
    default:
      return state;
  }
};

export default firebaseReducer;
