import {
  FB_USER_DATA_REQUEST,
  FB_USER_DATA_SUCCESS,
  FB_USER_DATA_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case FB_USER_DATA_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case FB_USER_DATA_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        name: action.payload.displayName,
        email: action.payload.email,
        verified: action.payload.emailVerified,
        photoUrl: action.payload.photoUrl,
        anonymous: action.payload.isAnonymous,
        uid: action.payload.uid,
      });
    case FB_USER_DATA_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        name: null,
        email: null,
        emailVerified: null,
        photoUrl: null,
        isAnonymous: null,
        uid: null,
      });
    default:
      return state;
  }
};

export default userReducer;
