import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import {config} from '../../config.js';

class ChairCalibrationProgress extends Component {
  render() {
    let { chairId, chairName, progressFetch } = this.props

    if (progressFetch.pending) {
      return <Loading />
    } else if (progressFetch.rejected) {
      if(progressFetch.meta.response !== undefined && progressFetch.meta.response.status === 404) {
        return <Error message="Chair not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (progressFetch.fulfilled) {
      let progress = progressFetch.value['progress'];

      if(progress !== 100) {
        return (
          <div>
            <h1>Chair {chairName} is being calibrated!</h1>
            <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />
            <p>Calibration progress {progress}%</p>
            <div className="text-center">
              <Link to="/chairs" className="btn btn-primary"> Back </Link>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Chair {chairName} calibrated!</h1>
            <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />
            <p>Calibration progress {progress}%</p>
            <div className="text-center">
              <Link to={`/chairs/${chairId}/panel`} className="btn btn-success"> Show panel </Link>
              &nbsp;
              <Link to="/chairs" className="btn btn-primary"> Back to chairs </Link>
            </div>
          </div>
        );
      }
    }
  }
}

export default connect(props => ({
  progressFetch: {
    url: `${config.server}:${config.port}/chairs/${props.chairId}/fetch_calibration_progress`,
    refreshInterval: 500
  }
})) (withRouter(ChairCalibrationProgress))