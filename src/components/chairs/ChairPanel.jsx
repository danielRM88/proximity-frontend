import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import ChairDetail from './ChairDetail';
import { Link } from 'react-router-dom';
import '../../App.css'

import {config} from '../../config.js'

class ChairPanel extends Component {
  render() {
    let chairId = this.props.match.params.id
    let { chairFetch } = this.props;

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
              <ChairDetail beacons={beacons} chair_id={chairId}/>
            </div>
            <div className="col-sm-8">
              <ChairDetail beacons={beacons} chair_id={chairId} has_filter={hasFilter}/>
            </div>
          </div>
          <div className="text-center">
            <Link to="/chairs" className="btn btn-primary"> Back </Link>
          </div>
        </div>
      );
    }
  }
}

export default connect(props => ({
  chairFetch: {
    url: `${config.server}:${config.port}/chairs/${props.match.params.id}`
  }
})) (ChairPanel)