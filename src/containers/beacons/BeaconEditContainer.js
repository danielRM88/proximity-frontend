import BeaconEdit from '../../components/beacons/BeaconEdit'
import { connect } from 'react-redux';
import { updateBeaconRequest } from '../../actions/beaconsActions';

const mapStateToProps = (state) => {
  const editState = state.beacons.edit;
  const loading = editState.loading;
  const beacon = editState.beacon;
  const chairId = beacon.chair_id;
  const chairName = beacon.chair_name;
  const chairs = state.chairs.index.chairs;

  let selectedOption = {value: "", label: "No Chair"};
  let selectOptions = [selectedOption];

  if(chairId!=undefined) {
    selectedOption = {value: chairId, label: chairName};
  }

  if (chairs != undefined) {
    selectOptions = selectOptions.concat(chairs.map((chair, index) => {
      return { value: chair.id, label: chair.name };
    }));
  }

  return ({
    beacon,
    loading,
    selectedOption,
    selectOptions
  })
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (beacon) => { 
    dispatch(updateBeaconRequest(beacon))
  }
});

const BeaconEditContainer = connect(mapStateToProps, mapDispatchToProps)(BeaconEdit);
export default BeaconEditContainer;