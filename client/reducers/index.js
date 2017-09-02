import { combineReducers } from 'redux';

import { SNAPPED_POINTS_SUCCESS } from '../actions/types';

import initialState from './initial-state';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNAPPED_POINTS_SUCCESS:
      return Object.assign({}, state, {
        snappedPoints: action.payload,
      });
    default:
      return state;
  }
};

export default rootReducer;
