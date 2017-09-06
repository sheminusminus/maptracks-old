import { connect } from 'react-redux';

import Map from './Map';

import {
  snapToRoads,
} from '../../actions/creators';

const mapStateToProps = state => ({
  snappedPoints: state.maps.snappedPoints,
  snappedSaved: state.maps.saveState.snapped,
});

const mapDispatchToProps = {
  snapToRoads,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
