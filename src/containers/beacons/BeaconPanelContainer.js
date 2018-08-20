import BeaconPanel from '../../components/beacons/BeaconPanel'
import { connect } from 'react-redux';
import { refreshBeaconDataRequest } from '../../actions/beaconsActions';

const mapStateToProps = (state) => {
  const panelState = state.beacons.panel;
  const loading = panelState.loading;
  const beacons = panelState.beacons;
  let data = [];
  let row;
  let measurements;
  let headers = [""];
  let maxMeasurements = 0;
  let value;
  let beaconsIds = [];

  if (beacons.length > 0) {
    headers = headers.concat(beacons.map((beacon, j) => {
      beaconsIds.push(beacon.id);
      if (beacon.measurements.length > maxMeasurements) {
        maxMeasurements = beacon.measurements.length;
      }
      return beacon.mac_address;
    }));

    if (maxMeasurements > 0) {
      data.push(headers);
    }
    for(var i=0; i<maxMeasurements; i++) {
      row = [];
      row.push(i+1);
      beacons.map((beacon, index) => {
        measurements = beacon.measurements
        value = measurements[i];
        row.push(value);
      });
      data.push(row);
    }
  }

  return ({
    data,
    loading,
    limit: maxMeasurements
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshData: (beacons) => { 
    if(beacons !== undefined && beacons.length > 0) {
      dispatch(refreshBeaconDataRequest(beacons, 200));
    }
  }
});

const BeaconPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BeaconPanel);
export default BeaconPanelContainer;