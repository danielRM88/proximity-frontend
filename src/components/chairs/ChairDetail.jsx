import React, { Component } from 'react';
import BeaconPanel from '../beacons/BeaconPanel';
import FilterPanel from './FilterPanel';

class ChairDetail extends Component {
  render() {
    let { beacons, chair_id, has_filter } = this.props

    if (has_filter) {
      return (
        <div>
          <BeaconPanel limit={200} beacons={beacons}/>
          <FilterPanel limit={200} chair_id={chair_id}/>
        </div>
      )
    } else {
      return (
        <div>
          <BeaconPanel limit={200} beacons={beacons}/>
          <div className="beacon-panel">
            <div className="row">
              <div className="col-sm-12">
                <h5>Filter</h5>
              </div>
            </div>
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                No filter assigned
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default ChairDetail;