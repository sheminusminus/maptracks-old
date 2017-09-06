import {
  SNAPPED_POINTS_REQUEST,
  SNAPPED_POINTS_SUCCESS,
  SNAPPED_POINTS_FAILURE,
  SAVE_MASS_CORRELATED_SUCCESS,
  SAVE_CORRELATED_SUCCESS,
} from '../actions/types';

import initialState from './initial-state';

const correlatedLocationData = (snapped, original, prevData) => {
  const correlated = [];

  for (let i = 0; i < snapped.length; i++) {
    const index = snapped[i].originalIndex;
    const placeId = snapped[i].placeId;
    const coords = snapped[i].location;
    const timestamp = original[index].timestamp;

    correlated.push({
      placeId,
      coords,
      timestamp,
    });
  }

  return correlated.concat(prevData);
};

const correlatedOrEmptyArray = (massState, userState, data) => {
  if (massState === true && userState === true) {
    return [];
  }
  return data;
};

const newSaveState = (massState, userState, snapState) => {
  if (massState === true && userState === true) {
    return {
      mass: false,
      user: false,
      snapped: false,
    };
  }
  return {
    mass: massState,
    user: userState,
    snapped: snapState,
  };
};

const mapsReducer = (state = initialState.maps, action) => {
  switch (action.type) {
    case SNAPPED_POINTS_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        saveState: Object.assign({}, state.saveState, {
          snapped: false,
        }),
      });
    case SNAPPED_POINTS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        snappedPoints: action.payload.snappedPoints,
        correlatedLocations: correlatedLocationData(
          action.payload.snappedPoints,
          action.payload.originalPositions,
          state.correlatedLocations,
        ),
        saveState: Object.assign({}, state.saveState, {
          snapped: true,
        }),
      });
    case SNAPPED_POINTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        saveState: Object.assign({}, state.saveState, {
          snapped: false,
        }),
      });
    case SAVE_MASS_CORRELATED_SUCCESS:
      return Object.assign({}, state, {
        fetching: !(state.saveState.user),
        correlatedLocations: correlatedOrEmptyArray(
          true,
          state.saveState.user,
          state.correlatedLocations,
        ),
        saveState: newSaveState(true, state.saveState.user, state.saveState.snapped),
      });
    case SAVE_CORRELATED_SUCCESS:
      return Object.assign({}, state, {
        fetching: !(state.saveState.mass),
        correlatedLocations: correlatedOrEmptyArray(
          state.saveState.mass,
          true,
          state.correlatedLocations,
        ),
        saveState: newSaveState(state.saveState.mass, true, state.saveState.snapped),
      });
    default:
      return state;
  }
};

export default mapsReducer;
