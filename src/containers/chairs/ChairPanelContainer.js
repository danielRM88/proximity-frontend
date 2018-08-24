import ChairPanel from '../../components/chairs/ChairPanel'
import { connect } from 'react-redux';
import { refreshChairDataRequest, updateFilterProcessErrorRequest, updateGroundTruthRequest } from '../../actions/chairsActions';

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
  const seated = state.algorithms.kmeans.seated;
  let active;
  let gtSeated = false;
  let gtGender = undefined;
  let gtHeight = 0.0;
  let gtWeight = 0.0;
  let tn;
  let fp;
  let tp;
  let fn;
  let accuracy;
  let precision;
  let recall;
  let specificity;

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

    const groundTruth = chair.ground_truth;
    if (groundTruth !== undefined) {
      active = groundTruth.active;
      gtSeated = groundTruth.seated;
      gtGender = groundTruth.gender;
      gtHeight = groundTruth.height;
      gtWeight = groundTruth.weight;
    }

    const performance = state.algorithms.kmeans.performance;
    if (performance !== undefined) {
      tn = performance.tn;
      fp = performance.fp;
      tp = performance.tp;
      fn = performance.fn;
      accuracy = performance.accuracy;
      precision = performance.precision;
      recall = performance.recall;
      specificity = performance.specificity;
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
    active,
    gtSeated,
    gtGender,
    gtHeight,
    gtWeight,
    tn,
    fp,
    tp,
    fn,
    accuracy,
    precision,
    recall,
    specificity,
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
  },
  onClickAction: (groundTruth) => {
    dispatch(updateGroundTruthRequest(groundTruth));
  }
});

const ChairPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ChairPanel);
export default ChairPanelContainer;