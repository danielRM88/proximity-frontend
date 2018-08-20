import React, { Component } from 'react';
import BeaconPanelContainer from '../../containers/beacons/BeaconPanelContainer';
import FilterPanelContainer from '../../containers/chairs/FilterPanelContainer';
import Seated from './Seated';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

class ChairPanel extends Component {
  render() {
    const { chairId, chairName, beaconsIds, hasFilter, calibrated, loading, seated } = this.props;
    if(!loading) {
      if(calibrated) {
        return (
          <div className="panel">
            <header>
              <h1>Chair {chairName}</h1>
            </header>
            <div className="row">
              <div className="col-sm-4">
                <Seated seated={seated} />
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
        return(
          <div className="panel">
            <header>
              <h1>Chair {chairName} not calibrated!</h1>
            </header>
            <div className="text-center">
              <Link to={`/calibration/${chairId}`} className="btn btn-success"> Start Calibration </Link>
              &nbsp;
              <Link to="/chairs" className="btn btn-primary"> Back </Link>
            </div>
          </div>
        );
      }
    } else {
      return(<Loading />);
    }
  }
}

export default ChairPanel;