import { connect } from 'react-redux';

import ConnectSpotify from './ConnectSpotify';

import {
  snapToRoads,
} from '../../actions/creators';

const mapStateToProps = state => ({
  authUrl: state.spotify.authUrl,
  uid: state.user.uid,
});

export default connect(
  mapStateToProps,
)(ConnectSpotify);
