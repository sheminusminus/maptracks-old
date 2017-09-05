import { connect } from 'react-redux';

import Map from './Map';

import {
  snapToRoads,
} from '../../actions/creators';

const mapStateToProps = state => ({
  snappedPoints: state.maps.snappedPoints,
});

const mapDispatchToProps = {
  snapToRoads,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
