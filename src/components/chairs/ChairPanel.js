import React, { Component } from 'react';
import BeaconPanelContainer from '../../containers/beacons/BeaconPanelContainer';
import FilterPanelContainer from '../../containers/chairs/FilterPanelContainer';
import KMeansPanelContainer from '../../containers/algorithms/KMeansPanelContainer';
import ChairFilterForm from './ChairFilterForm';
import GroundTruthForm from './GroundTruthForm';
import Seated from './Seated';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

class ChairPanel extends Component {
  render() {
    const { chairId, chairName, beaconsIds, hasFilter, calibrated, loading, seated, updateFilter, processNoise, continuousAdjustment, adjustmentThreshold,
            active, gtSeated, gtGender, gtHeight, gtWeight, onClickAction, 
            tn, fp, tp, fn, accuracy, precision, recall, specificity } = this.props;
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
                <div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Algorithm</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">G. Truth</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Filter</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <KMeansPanelContainer />
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <GroundTruthForm chairId={chairId} 
                                      active={active}
                                      seated={gtSeated}
                                      gender={gtGender}
                                      height={gtHeight}
                                      weight={gtWeight}
                                      tn={tn} fp={fp} tp={tp} fn={fn} accuracy={accuracy} precision={precision} recall={recall} specificity={specificity}
                                      onClickAction={onClickAction}/>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      {hasFilter ?
                          (<ChairFilterForm  chairId={chairId}
                                          processNoise={processNoise}
                                          continuousAdjustment={continuousAdjustment}
                                          adjustmentThreshold={adjustmentThreshold}
                                          onActionClick={updateFilter}/>):
                          (
                            <div className="beacon-panel">
                              <div className="row">
                                <div id="chartSection" className="col-sm-12">
                                  No Filter found...
                                </div>
                              </div>
                            </div>
                          )
                      }
                    </div>
                  </div>
                </div>
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
                <div className="text-center">
                  <Link to="/chairs" className="btn btn-primary"> Back </Link>
                </div>
              </div>
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