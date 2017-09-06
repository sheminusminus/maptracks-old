export default {
  auth: {
    authenticated: false,
    fetching: false,
    uid: null,
  },
  maps: {
    fetching: false,
    snappedPoints: [],
    correlatedLocations: [],
    saveState: {
      mass: false,
      user: false,
      snapped: false,
    },
  },
  firebase: {
    fetching: false,
    initialized: false,
  },
  spotify: {
    fetching: false,
    authUrl: null,
    accessToken: null,
    refreshToken: null,
    recent: [],
  },
  user: {
    fetching: false,
    name: null,
    email: null,
    verified: null,
    uid: null,
    photoUrl: null,
    anonymous: null,
  },
};
