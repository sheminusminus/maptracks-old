import axios from 'axios';

import {
  SNAPPED_POINTS_FAILURE,
  SNAPPED_POINTS_SUCCESS,
} from '../types';

function snapToRoads(points, positions) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://roads.googleapis.com/v1/snapToRoads',
        params: {
          path: points.join('|'),
          key: 'AIzaSyBz-JfaschRFGIIACdWGyVkQRsk72a0xeY',
        },
      });

      dispatch({
        type: SNAPPED_POINTS_SUCCESS,
        payload: {
          snappedPoints: response.data.snappedPoints,
          originalPositions: positions,
        },
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
