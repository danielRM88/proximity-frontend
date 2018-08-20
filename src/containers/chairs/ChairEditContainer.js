import ChairEdit from '../../components/chairs/ChairEdit'
import { connect } from 'react-redux';
import { updateChairRequest, startChairCalibrationRequest, getCalibrationProgressRequest } from '../../actions/chairsActions';

const mapStateToProps = (state) => {
  const editState = state.chairs.edit;
  const loading = editState.loading;
  const id = editState.chair.id;
  const name = editState.chair.name;
  const notes = editState.chair.notes;
  const hasFilter = editState.chair.has_filter;
  const calibration = editState.chair.calibration;
  let calibrated = false;
  let noRecords = 100;
  let ongoingCalibration = false;
  let progress = 0;

  if (calibration !== undefined) {
    calibrated = calibration.calibrated;
    noRecords = calibration.records_to_calibrate;
    ongoingCalibration = calibration.ongoing;
    progress = calibration.progress
  }

  return ({
    id,
    name, 
    notes,
    hasFilter,
    calibrated,
    noRecords,
    ongoingCalibration,
    progress,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (chair) => { 
    dispatch(updateChairRequest(chair))
  },
  onStartCalibrationClick: (calibration) => {
    dispatch(startChairCalibrationRequest(calibration))
  },
  refreshCalibrationProgress: (chairId) => {
    dispatch(getCalibrationProgressRequest(chairId))
  }
});

const ChairEditContainer = connect(mapStateToProps, mapDispatchToProps)(ChairEdit);
export default ChairEditContainer;