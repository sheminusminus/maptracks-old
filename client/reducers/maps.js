import {
  SNAPPED_POINTS_REQUEST,
  SNAPPED_POINTS_SUCCESS,
  SNAPPED_POINTS_FAILURE,
} from '../actions/types';

import initialState from './initial-state';

const mapsReducer = (state = initialState.maps, action) => {
  switch (action.type) {
    case SNAPPED_POINTS_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case SNAPPED_POINTS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        snappedPoints: action.payload,
      });
    case SNAPPED_POINTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
      });
    default:
      return state;
  }
};

export default mapsReducer;
