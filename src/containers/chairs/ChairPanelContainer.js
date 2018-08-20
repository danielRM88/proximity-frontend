import ChairPanel from '../../components/chairs/ChairPanel'
import { connect } from 'react-redux';
import { refreshChairDataRequest, updateFilterProcessErrorRequest } from '../../actions/chairsActions';

const mapStateToProps = (state) => {
  const editState = state.chairs.edit;
  const loading = editState.loading;
  const chair = editState.chair;
  let chairId;
  let chairName;
  let beaconsIds = [];
  let hasFilter;
  let calibrated;
  let seated = false;
  let processNoise;

  if (chair !== undefined) {
    chairId = chair.id;
    chairName = chair.name;

    let beacons = chair.beacons;
    if (beacons !== undefined) {
      beaconsIds = beacons.map((beacon, index) => {
        return beacon.id;
      });
    }

    hasFilter = chair.has_filter;
    calibrated = chair.calibrated;

    if(hasFilter) {
      processNoise = chair.filter.V1[0][0]
    }
  }

  return ({
    chairId,
    chairName,
    beaconsIds,
    hasFilter,
    calibrated,
    seated,
    processNoise,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshData: (chairId) => { 
    if(chairId !== undefined) {
      dispatch(refreshChairDataRequest(chairId, 200));
    }
  },
  updateFilter: (chairId, processNoise) => {
    dispatch(updateFilterProcessErrorRequest(chairId, processNoise));
  }
});

const ChairPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ChairPanel);
export default ChairPanelContainer;