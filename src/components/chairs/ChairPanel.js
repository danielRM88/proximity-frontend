import React, { Component } from 'react';
import BeaconPanelContainer from '../../containers/beacons/BeaconPanelContainer';
import FilterPanelContainer from '../../containers/chairs/FilterPanelContainer';
import ChairFilterForm from '../../components/chairs/ChairFilterForm';
import Seated from './Seated';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

class ChairPanel extends Component {
  render() {
    const { chairId, chairName, beaconsIds, hasFilter, calibrated, loading, seated, updateFilter, processNoise, continuousAdjustment, adjustmentThreshold } = this.props;
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
                {hasFilter &&
                    <ChairFilterForm  chairId={chairId}
                                    processNoise={processNoise}
                                    continuousAdjustment={continuousAdjustment}
                                    adjustmentThreshold={adjustmentThreshold}
                                    onActionClick={updateFilter}/>
                }
              </div>
              <div className="col-sm-8">
                <BeaconPanelContainer beaconsIds={beaconsIds} chairId={chairId}/>
                {hasFilter ?
                  (<FilterPanelContainer chairId={chairId} />) :
                  (
                    <div className="beacon-panel">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>Filters</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div id="chartSection" className="col-sm-12">
                          No Filter Available for this Chair
                        </div>
                      </div>
                    </div>
                  )
                }
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
              <Link to={`/chairs/${chairId}/edit`} className="btn btn-success"> Start Calibration </Link>
              &nbsp;
              <Link to="/chairs" className="btn btn-primary"> Back </Link>
            </div>
          </div>
        );
      }
    } else {
      return(
        <div className="panel">
          <header>
            <h1>Chair {chairName}</h1>
          </header>
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
  }
}

export default ChairPanel;