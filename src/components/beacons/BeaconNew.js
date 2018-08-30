import React, { Component } from 'react';
import BeaconForm from './BeaconForm';
import { Redirect } from 'react-router-dom'

class BeaconNew extends Component {
  render() {
    const { loading, selectOptions, selectedOption, onCreateClick, redirect } = this.props;

    if (redirect) {
      return (<Redirect to="/beacons" />);
    } else  {
      return (
        <div>
          <h1>New Beacon</h1>
          <div className="row">
            <div className="col-sm-6">
              <BeaconForm onActionClick={onCreateClick} selectOptions={selectOptions} selectedOption={selectedOption} />
              { loading ? (<p>Loading...</p>) : "" }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default BeaconNew;