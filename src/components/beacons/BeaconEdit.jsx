import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import BeaconForm from './BeaconForm';
import './beacons.css';

import {config} from '../../config.js'

class BeaconEdit extends Component {
  render() {

    let { beaconFetch } = this.props;

    if (beaconFetch.pending) {
      return <Loading />
    } else if (beaconFetch.rejected) {
      if(beaconFetch.meta.response !== undefined && beaconFetch.meta.response.status === 404) {
        return <Error message="Beacon not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (beaconFetch.fulfilled) {
      let beacon = beaconFetch.value
      let id = beacon["id"];
      let macAddress = beacon["mac_address"]
      let brand = beacon["brand"];
      let model = beacon["model"]
      let chairId = beacon["chair_id"];
      let chairName;

      if (chairId !== null) {
        chairName = beacon["chair"]["name"]
      }

      return (
        <div>
          <h1>Edit Beacon {macAddress}</h1>
          <div className="row">
            <div className="col-sm-6">
              <BeaconForm id={id} macAddress={macAddress} brand={brand} model={model} chairId={chairId} chairName={chairName}/>
            </div>
          </div>
        </div>
      )
    }
    
  }
}

export default connect(props => ({
  beaconFetch: {
    url: `${config.server}:${config.port}/beacons/${props.match.params.id}`
  }
})) (BeaconEdit)