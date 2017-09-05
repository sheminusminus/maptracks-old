export default {
  auth: {
    authenticated: false,
    fetching: false,
    uid: null,
  },
  maps: {
    fetching: false,
    snappedPoints: [],
  },
  firebase: {
    fetching: false,
    initialized: false,
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
