import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import '../beacons/beacons.css';

import {config} from '../../config.js'

class FilterPanel extends Component {
  render() {
    const { predictionFetch, limit } = this.props;

    if (predictionFetch.pending) {
      return <Loading />
    } else if (predictionFetch.rejected) {
      if(predictionFetch.meta.response !== undefined && predictionFetch.meta.response.status === 404) {
        return <Error message="Filter not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (predictionFetch.fulfilled) {
      let response = predictionFetch.value;
      let filterData = [["", "Output"]];
      let varianceData = [["", "P"]];
      let predictions = response.predictions;

      for(var i=0; i<predictions.length; i++) {
        filterData.push([i+1, predictions[i]['filter_result']]);
        varianceData.push([i+1, predictions[i]['filter_variance']]);
      }

      return (
        <div className="beacon-panel">
          <div className="row">
            <div className="col-sm-12">
              <h5>Filter</h5>
            </div>
          </div>
          <div className="row">
            <div id="chartSection" className="col-sm-12">
              <Chart
                chartType="LineChart"
                data={filterData}
                width="100%"
                options={{
                  title: "Kalman Filter",
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
          <div className="row">
            <div id="chartSection" className="col-sm-12">
              <Chart
                chartType="LineChart"
                data={varianceData}
                width="100%"
                options={{
                  title: "Variance of the state prediction error",
                  hAxis: { title: "", viewWindow: { min: 1, max: limit } },
                  vAxis: { title: "", viewWindow: { min: 0, max: 10 } },
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
  predictionFetch: {
    url: `${config.server}:${config.port}/chairs/${props.chair_id}/predictions?limit=${props.limit}`,
    refreshInterval: 500
  }
})) (FilterPanel)