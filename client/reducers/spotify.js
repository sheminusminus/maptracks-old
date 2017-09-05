import {
  SPOTIFY_URL_REQUEST,
  SPOTIFY_URL_SUCCESS,
  SPOTIFY_URL_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const spotifyReducer = (state = initialState.firebase, action) => {
  switch (action.type) {
    case SPOTIFY_URL_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case SPOTIFY_URL_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authUrl: action.payload,
      });
    case SPOTIFY_URL_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
      });
    default:
      return state;
  }
};

export default spotifyReducer;
