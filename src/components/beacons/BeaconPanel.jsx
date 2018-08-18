import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
// import BeaconDetail from './BeaconDetail';
import './beacons.css';

import {config} from '../../config.js'

class BeaconPanel extends Component {
  render() {
    const { beaconFetch } = this.props

    if (beaconFetch.pending) {
      return <Loading />
    } else if (beaconFetch.rejected) {
      if(beaconFetch.meta.response !== undefined && beaconFetch.meta.response.status === 404) {
        return <Error message="Beacon not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (beaconFetch.fulfilled) {
      const { beacons, limit } = this.props
      let response = beaconFetch.value;
      let beaconData = [];
      let value = 0;
      let beaconId;
      let headers = [];
      let mac_address;
      let active;

      const data = [];
      headers.push("");

      let details = [];
      for(var k=0; k<beacons.length; k++) {
        beaconId = beacons[k];
        mac_address = response[beaconId].mac_address;
        active = response[beaconId].active;
        headers.push(`${mac_address}`);
        details.push({mac_address: mac_address, active: active});
      }

      data.push(headers)
      for(var i=0; i<limit; i++) {
        beaconData = []
        for(var j=0; j<beacons.length; j++) {
          beaconId = beacons[j];
          value = response[beaconId].measurements[i];
          beaconData.push(value);
        }
        data.push([i+1].concat(beaconData));
      }

      return (
        <div className="beacon-panel">
          <div className="row">
            <div className="col-sm-12">
              <h5>Beacons</h5>
            </div>
          </div>
          <div className="row">
          {/*<div id="detailSection" className="col-sm-2">
            <h5>Beacons</h5>
            {details.map( function(beacon, index) {
              return(
                <div key={index}>
                  <BeaconDetail beacon={beacon} />
                </div>
              )
            })}
          </div>*/}
            <div id="chartSection" className="col-sm-12">
              <Chart
                chartType="LineChart"
                data={data}
                width="100%"
                options={{
                  title: "BLE RSSI plot",
                  hAxis: { title: "", viewWindow: { min: 1, max: limit } },
                  vAxis: { title: "", viewWindow: { min: -100, max: -25 } },
                  curveType: "function",
                  legend: { position: "bottom" },
                  interpolateNulls: true
                }}
                legendToggle
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(props => ({
  beaconFetch: {
    url: `${config.server}:${config.port}/beacons/fetch_data?limit=${props.limit}&beacons_ids=[${props.beacons}]`,
    refreshInterval: 500
  }
})) (BeaconPanel)
