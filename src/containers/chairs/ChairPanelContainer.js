import ChairPanel from '../../components/chairs/ChairPanel'
import { connect } from 'react-redux';
import { refreshChairDataRequest } from '../../actions/chairsActions';

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
  }

  return ({
    chairId,
    chairName,
    beaconsIds,
    hasFilter,
    calibrated,
    seated,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshData: (chairId) => { 
    if(chairId !== undefined) {
      dispatch(refreshChairDataRequest(chairId, 200));
    }
  }
});

const ChairPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ChairPanel);
export default ChairPanelContainer;