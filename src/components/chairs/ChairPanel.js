import React, { Component } from 'react';
import BeaconPanelContainer from '../../containers/beacons/BeaconPanelContainer'
import FilterPanelContainer from '../../containers/chairs/FilterPanelContainer'
import { Link } from 'react-router-dom';
import Loading from '../../utility/Loading';

class ChairPanel extends Component {
  render() {
    const { chairId, chairName, beaconsIds, hasFilter, calibrated, loading } = this.props;
    if(!loading) {
      return (
        <div className="panel">
          <header>
            <h1>Chair {chairName}</h1>
          </header>
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-8">
              <BeaconPanelContainer beaconsIds={beaconsIds} chairId={chairId}/>
              <FilterPanelContainer chairId={chairId} />
            </div>
          </div>
          <div className="text-center">
            <Link to="/chairs" className="btn btn-primary"> Back </Link>
          </div>
        </div>
      );
    } else {
      return(<Loading />);
    }
  }
}

export default ChairPanel;