import { connect } from 'react-redux';

import Map from './Map';

import {
  snapToRoads,
} from '../../actions/creators';

const mapStateToProps = state => ({
  snappedPoints: state.snappedPoints,
});

const mapDispatchToProps = {
  snapToRoads,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
