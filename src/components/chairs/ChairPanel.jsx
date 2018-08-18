import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import ChairDetail from './ChairDetail';
import '../../App.css'

import {config} from '../../config.js'

class ChairPanel extends Component {
  render() {
    let { chairFetch, chair_id } = this.props;

    if (chairFetch.pending) {
      return <Loading />
    } else if (chairFetch.rejected) {
      if(chairFetch.meta.response !== undefined && chairFetch.meta.response.status === 404) {
        return <Error message="Chair not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (chairFetch.fulfilled) {

      let response = chairFetch.value;
      let chairName = response['name']
      let beaconData = response['beacons'];
      let hasFilter = response['has_filter']
      let beacons = [];
      let beaconId;

      for(var i=0; i<beaconData.length; i++) {
        beaconId = parseInt(beaconData[i]['id'], 10);
        beacons.push(beaconId);
      }

      return (
        <div className="panel">
          <header>
            <h1>Chair {chairName}</h1>
          </header>
          <div className="row">
            <div className="col-sm-4">
              <ChairDetail beacons={beacons} chair_id={chair_id}/>
            </div>
            <div className="col-sm-8">
              <ChairDetail beacons={beacons} chair_id={chair_id} has_filter={hasFilter}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(props => ({
  chairFetch: {
    url: `${config.server}:${config.port}/chairs/${props.chair_id}`,
    refreshInterval: 500
  }
})) (ChairPanel)