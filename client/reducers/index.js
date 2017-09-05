import { combineReducers } from 'redux';

import auth from './auth';
import firebase from './firebase';
import maps from './maps';
import spotify from './spotify';
import user from './user';

import {
  LOGOUT_REQUEST,
} from '../actions/types';

const appReducer = combineReducers({
  auth,
  firebase,
  maps,
  spotify,
  user,
});

const root = (state, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

export default root;
