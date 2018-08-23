import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../Loading';

class BeaconPanel extends Component {
  componentDidMount() {
    let { refreshData, beaconsIds } = this.props;
    this.interval = setInterval(() => { refreshData(beaconsIds); }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading, data, limit } = this.props;
    if (!loading) {
      if(data.length > 0) {
        return (
          <div className="beacon-panel">
            <div className="row">
              <div className="col-sm-12">
                <h5>Beacons</h5>
              </div>
            </div>
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                <Chart
                  chartType="LineChart"
                  data={data}
                  width="100%"
                  options={{
                    title: "BLE RSSI plot",
                    hAxis: { title: "", viewWindow: { min: 0, max: limit } },
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
        ); 
      } else {
        return (
          <div className="beacon-panel">
            <div className="row">
              <div className="col-sm-12">
                <h5>Beacons</h5>
              </div>
            </div>
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                No available data to display
              </div>
            </div>
          </div>
        ); 
      }
    } else {
      return (
        <div className="beacon-panel">
          <div className="row">
            <div className="col-sm-12">
              <h5>Beacons</h5>
            </div>
          </div>
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
  }
}

export default BeaconPanel;