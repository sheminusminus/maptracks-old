import { connect } from 'react-redux';

import {
  getFirebaseConfig,
  getSpotifyRecent,
  saveCorrelatedLocations,
} from '../actions/creators';

import Routes from './Routes';

const mapStateToProps = state => ({
  userId: state.user.uid,
  fbInitialized: state.firebase.initialized,
  correlatedLocations: state.maps.correlatedLocations,
  recent: state.spotify.recent,
});

const mapDispatchToProps = {
  getFirebaseConfig,
  getSpotifyRecent,
  saveCorrelatedLocations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
