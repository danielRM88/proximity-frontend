import BeaconList from '../../components/beacons/BeaconList'
import { deleteBeaconRequest, getBeaconsRequest } from '../../actions/beaconsActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  
  const beaconsState = state.beacons;
  const indexState = beaconsState.index;

  const beacons = indexState.beacons;
  const loading = indexState.loading;

  return ({
    loading,
    beacons
  })
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick(beaconId) {
    dispatch(deleteBeaconRequest(beaconId));
  },
  onPageClick() {
    dispatch(getBeaconsRequest());
  }
});

const BeaconsListContainer = connect(mapStateToProps, mapDispatchToProps)(BeaconList);
export default BeaconsListContainer;