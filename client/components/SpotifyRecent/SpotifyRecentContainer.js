import { connect } from 'react-redux';

import SpotifyRecent from './SpotifyRecent';

import {
  getSpotifyRecent,
} from '../../actions/creators';

const mapStateToProps = state => ({
  recent: state.spotify.recent,
  userId: state.user.uid,
  dbInitialized: state.firebase.initialized,
});

const mapDispatchToProps = {
  getSpotifyRecent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotifyRecent);
