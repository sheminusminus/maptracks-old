import { connect } from 'react-redux';

import Menu from './Menu';

import {
  logout,
} from '../../actions/creators';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
