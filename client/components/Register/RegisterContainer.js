import { connect } from 'react-redux';

import Register from './Register';

import {
  register,
} from '../../actions/creators';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
