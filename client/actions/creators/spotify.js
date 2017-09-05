import axios from 'axios';

import {
  SPOTIFY_URL_REQUEST,
  SPOTIFY_URL_SUCCESS,
  SPOTIFY_URL_FAILURE,
} from '../types';

function getSpotifyUrl() {
  return async (dispatch) => {
    dispatch({
      type: SPOTIFY_URL_REQUEST,
    });

    try {
      const response = await axios({
        method: 'GET',
        url: '/api/spotify/auth',
      });
      console.log(response);

      dispatch({
        type: SPOTIFY_URL_SUCCESS,
        payload: response.data.url,
      });
    } catch (error) {
      console.log(error, error.response);
      dispatch({
        type: SPOTIFY_URL_FAILURE,
      });
    }
  };
}

export {
  getSpotifyUrl,
};
