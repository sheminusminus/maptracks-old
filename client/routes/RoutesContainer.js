import { connect } from 'react-redux';

import {
  getFirebaseConfig,
} from '../actions/creators';

import Routes from './Routes';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getFirebaseConfig,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
