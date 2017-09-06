import {
  login,
  register,
  logout,
} from './auth';

import {
  getFirebaseConfig,
  getSpotifyRecent,
  saveCorrelatedLocations,
} from './firebase';

import {
  snapToRoads,
} from './map';

import {
  getSpotifyUrl,
} from './spotify';

export {
  // auth
  login,
  register,
  logout,
  // firebase
  getFirebaseConfig,
  getSpotifyRecent,
  saveCorrelatedLocations,
  // maps
  snapToRoads,
  // spotify
  getSpotifyUrl,
};
