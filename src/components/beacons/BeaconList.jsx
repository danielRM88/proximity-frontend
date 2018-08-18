import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Messages from '../utility/Messages';
import './beacons.css';

import {config} from '../../config.js'

class BeaconList extends Component {
  render() {

    let { beaconFetch } = this.props;

    if (beaconFetch.pending) {
      return <Loading />
    } else if (beaconFetch.rejected) {
      if(beaconFetch.meta.response !== undefined && beaconFetch.meta.response.status === 404) {
        return <Error message="Beacons not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (beaconFetch.fulfilled) {
      let beacons = beaconFetch.value

      return (
        <div>
          <h1>Beacons</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Chair</th>
                <th className="left-separator">Mac Address</th>
                <th className="left-separator">Brand</th>
                <th className="left-separator">Model</th>
                <th className="left-separator">Active</th>
                <th className="left-separator"></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                beacons.map((beacon, i) => {
                  let id = beacon["id"];
                  let macAddress = beacon["mac_address"];
                  let brand = beacon["brand"];
                  let model = beacon["model"];
                  let active = beacon["active"];
                  let chairId = beacon["chair_id"];
                  let chairName = "None";
                  if (chairId != undefined) {
                    chairName = beacon["chair"]["name"]
                  }
                  return (
                    <tr key={i}>
                      <td>{chairName}</td>
                      <td className="left-separator">{macAddress}</td>
                      <td className="left-separator">{brand}</td>
                      <td className="left-separator">{model}</td>
                      <td className="left-separator">{active}</td>
                      <td className="left-separator"><Link to={`/beacons/${id}/edit`} className="btn btn-sm btn-primary"> Edit </Link></td>
                      <td><button onClick={(event) => this.handleClick(event, id)} className="btn btn-sm btn-danger"> Delete </button></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/beacons/new" className="btn btn-small btn-primary"> Create </Link>
          </div>
        </div>
      )
    }
    
  }

  handleClick(event, beaconId) {
    event.preventDefault();
    event.stopPropagation();
    fetch(`${config.server}:${config.port}/beacons/${beaconId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => this.handleResponse(data));
  }

  handleResponse(data) {
    console.log(data);
    let status = data.status;
    if (status !== 200) {
      ReactDOM.render(<Messages messages={[[data.error]]} />, document.getElementById('messages'));
    } else {
      this.props.beaconsRefresh();
    }
  }

}

export default connect(props => ({
  beaconFetch: {
    url: `${config.server}:${config.port}/beacons`
  },
  beaconsRefresh: () => ({
     beaconFetch: {
       url: `${config.server}:${config.port}/beacons`,
       force: true,
       refreshing: true
     }
   })
})) (BeaconList)
