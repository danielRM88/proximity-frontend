import React, { Component } from 'react';
import BeaconForm from './BeaconForm';
import './beacons.css';

class BeaconNew extends Component {
  render() {
    return (
      <div>
        <h1>New Beacon</h1>
        <div className="row">
          <div className="col-sm-6">
            <BeaconForm />
          </div>
        </div>
      </div>
    )
  }
}

export default BeaconNew;