import { connect } from 'react-redux';

import {
  login,
} from '../../actions/creators';

import Login from './Login';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
