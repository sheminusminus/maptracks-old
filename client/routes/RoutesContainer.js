import { connect } from 'react-redux';

import {
  getFirebaseConfig,
  getSpotifyRecent,
} from '../actions/creators';

import Routes from './Routes';

const mapStateToProps = state => ({
  userId: state.user.uid,
  fbInitialized: state.firebase.initialized,
});

const mapDispatchToProps = {
  getFirebaseConfig,
  getSpotifyRecent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
