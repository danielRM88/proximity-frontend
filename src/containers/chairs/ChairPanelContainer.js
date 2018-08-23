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
  let processNoise;
  let continuousAdjustment;
  let adjustmentThreshold;
  const seated = state.chairs.panel.seated;

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
      processNoise = chair.filter.V1[0][0];
      continuousAdjustment = chair.filter.continuous_adjustment;
      adjustmentThreshold = chair.filter.adjustment_threshold;
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
    continuousAdjustment,
    adjustmentThreshold,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshData: (chairId) => { 
    if(chairId !== undefined) {
      dispatch(refreshChairDataRequest(chairId, 200));
    }
  },
  updateFilter: (data, processNoise) => {
    dispatch(updateFilterProcessErrorRequest(data, processNoise));
  }
});

const ChairPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ChairPanel);
export default ChairPanelContainer;