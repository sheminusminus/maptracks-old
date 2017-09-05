import { connect } from 'react-redux';

import {
  getFirebaseConfig,
} from '../../actions/creators';

import App from './App';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getFirebaseConfig,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
