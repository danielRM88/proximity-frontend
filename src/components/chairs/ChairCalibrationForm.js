import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

class ChairCalibrationForm extends Component {
  componentDidMount() {
    let { chairId, calibrated, ongoingCalibration, noRecords, loading, refreshCalibrationProgress } = this.props;
    this.setState({
      chairId,
      calibrated,
      noRecords,
      loading
    })

    this.interval = 1;
    if (ongoingCalibration) {
      this.interval = setInterval(() => { refreshCalibrationProgress(chairId); }, 500);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    let { chairId, calibrated, progress, noRecords, ongoingCalibration, loading } = this.props;
    if (ongoingCalibration) {
      return (
        <div>
          Calibration in progress: {progress}%!
          <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />
        </div>
      );
    } else {
      return (
        <form onSubmit={(event) => this.handleClick(event, chairId)}>
          <div className="form-group">
            <label className="required" htmlFor="noRecords">No. of Measurements</label>
            <input type="number" step="1" name="noRecords" className="form-control" defaultValue={noRecords} onChange={(event) => {this.handleNoRecordsChange(event, this)}} autoFocus required/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary"> Start Calibration </button>
          </div>
        </form>
      );
    }
  }

  handleNoRecordsChange(event, component) {
    component.setState({noRecords: event.target.value.trim()});
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();

    const calibration = {
      chair_id: chairId,
      records_to_calibrate: this.state.noRecords
    };

    this.props.onActionClick(calibration);
  }
}

export default ChairCalibrationForm;