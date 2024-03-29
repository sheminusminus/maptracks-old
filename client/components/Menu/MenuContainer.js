import { connect } from 'react-redux';

import Menu from './Menu';

import {
  logout,
  spotifyAuth,
} from '../../actions/creators';

const mapStateToProps = state => ({
  uid: state.user.uid,
});

const mapDispatchToProps = {
  logout,
  spotifyAuth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
