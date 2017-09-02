import axios from 'axios';

import {
  SNAPPED_POINTS_FAILURE,
  SNAPPED_POINTS_SUCCESS,
} from '../types';

function snapToRoads(positions) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://roads.googleapis.com/v1/snapToRoads',
        params: {
          path: positions.join('|'),
          key: 'AIzaSyBz-JfaschRFGIIACdWGyVkQRsk72a0xeY',
        },
      });

      dispatch({
        type: SNAPPED_POINTS_SUCCESS,
        payload: response.data.snappedPoints,
      });
    } catch (error) {
      console.log(error, error.response);

      dispatch({
        type: SNAPPED_POINTS_FAILURE,
      });
    }
  };
}

export {
  snapToRoads,
};
