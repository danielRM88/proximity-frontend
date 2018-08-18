import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import './beacons.css';

class BeaconDetail extends Component {
  render() {
    let { beacon } = this.props;

    let className = "active-icon active-beacon";
    let status = "Active";
    if(!beacon.active) {
      className = "active-icon inactive-beacon";
      status = "Inactive";
    }

    return(
      <div className="row beacon-detail">
        <div className="col-sm-9">
          {beacon.mac_address} 
        </div>
        <div className="col-sm-3">
          <FaCircle className={className} />
        </div>
      </div>
    )
  }
}

export default BeaconDetail;