import React, { Component } from 'react';
import ChairForm from './ChairForm';
import ChairCalibrationForm from './ChairCalibrationForm';
import Loading from '../Loading';

class ChairEdit extends Component {
  render() {
    const { id, loading, name, calibrated, ongoingCalibration, 
            noRecords, progress, notes, hasFilter, onUpdateClick, 
            onStartCalibrationClick, refreshCalibrationProgress } = this.props
    if(!loading) {
      return (
        <div>
          <h1>Edit Chair {name}</h1>
          <div className="row">
            <div className="col-sm-6">
              <h5>Fields</h5>
              <ChairForm id={id}
                          name={name}
                          notes={notes}
                          hasFilter={hasFilter}
                          onActionClick={onUpdateClick} />
            </div>
            <div className="col-sm-6">
              <h5>Calibration</h5>
              <h6>Calibrated: {`${calibrated}`}</h6>
              <ChairCalibrationForm chairId={id} 
                          noRecords={noRecords}
                          calibrated={calibrated}
                          ongoingCalibration={ongoingCalibration}
                          progress={progress}
                          onActionClick={onStartCalibrationClick}
                          refreshCalibrationProgress={refreshCalibrationProgress} />
            </div>
          </div>
        </div>
      )
    } else {
      return (<Loading />);
    }
  }
}

export default ChairEdit;