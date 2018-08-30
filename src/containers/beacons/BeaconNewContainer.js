import BeaconNew from '../../components/beacons/BeaconNew'
import { connect } from 'react-redux';
import { createBeaconRequest } from '../../actions/beaconsActions';

const mapStateToProps = (state) => {
  const loading = state.beacons.new.loading;
  const redirect = state.app.redirect;
  const chairs = state.chairs.index.chairs;

  let selectedOption = {value: "", label: "No Chair"};
  let selectOptions = [selectedOption];

  if (chairs != undefined) {
    selectOptions = selectOptions.concat(chairs.map((chair, index) => {
      return { value: chair.id, label: chair.name };
    }));
  }

  return ({
    loading,
    selectedOption,
    redirect,
    selectOptions
  })
};

const mapDispatchToProps = (dispatch) => ({
  onCreateClick: (beacon) => { 
    dispatch(createBeaconRequest(beacon))
  }
});

const BeaconNewContainer = connect(mapStateToProps, mapDispatchToProps)(BeaconNew);
export default BeaconNewContainer;