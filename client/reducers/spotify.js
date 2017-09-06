import moment from 'moment';

import {
  SPOTIFY_URL_REQUEST,
  SPOTIFY_URL_SUCCESS,
  SPOTIFY_URL_FAILURE,
  DB_USER_DATA_REQUEST,
  DB_USER_DATA_SUCCESS,
  DB_USER_DATA_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const playedItem = (track, playedAt) => {
  const { album } = track;

  const id = track.id;
  const url = track.href;
  const name = track.name;
  const artist = track.artists[0].name;
  const albumName = album.name;
  const albumId = album.id;
  const image = album.images.length ? album.images[0] : '';
  const albumUrl = album.href;
  const timestamp = moment(playedAt).valueOf();

  return {
    id,
    url,
    name,
    artist,
    albumName,
    albumId,
    image,
    albumUrl,
    timestamp,
  };
};

const recentItems = (recent) => {
  const items = [];

  for (let i = 0; i < recent.length; i++) {
    const { track } = recent[i];

    const item = playedItem(track, recent[i].played_at);

    items.push(item);
  }

  return items;
};

const spotifyReducer = (state = initialState.spotify, action) => {
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
    case DB_USER_DATA_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case DB_USER_DATA_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        recent: recentItems(action.payload),
      });
    case DB_USER_DATA_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
      });
    default:
      return state;
  }
};

export default spotifyReducer;
