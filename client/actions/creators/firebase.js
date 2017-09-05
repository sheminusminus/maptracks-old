import axios from 'axios';

import {
  FIREBASE_DATA_REQUEST,
  FIREBASE_DATA_SUCCESS,
  FIREBASE_DATA_FAILURE,
} from '../types';

export function getFirebaseData() {
  return async (dispatch) => {
    dispatch({
      type: FIREBASE_DATA_REQUEST,
    });

    try {
      const response = axios({
        method: 'GET',
        url: '/api/firebase',
      });

      const { data } = response.data;

      dispatch({
        type: FIREBASE_DATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: FIREBASE_DATA_FAILURE,
      });
    }
  };
}
