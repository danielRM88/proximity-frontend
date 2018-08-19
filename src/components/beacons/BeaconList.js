import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeaconList extends Component {
  render() {
    const { beacons, loading } = this.props;

    if (!loading) {
      if (beacons && beacons.length > 0) {
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
                { beacons.map((beacon, i) => {
                  return(
                    <tr key={i}>
                      <td>{beacon.chair_name}</td>
                      <td>{beacon.mac_address}</td>
                      <td>{beacon.brand}</td>
                      <td>{beacon.model}</td>
                      <td>{beacon.active}</td>
                      <td><Link to={`/beacons/${beacon.id}/edit`} className="btn btn-sm btn-primary"> Edit </Link></td>
                      <td><a href="#" onClick={(event) => this.handleClick(event, beacon.id)} className="btn btn-sm btn-danger"> Delete </a></td>
                    </tr>
                  )
                }) }
              </tbody>
            </table>
            <div className="text-center">
              <Link to={`/beacons/new`} className="btn btn-sm btn-success"> New Beacon </Link>
              <br/>
              <br/>
              <br/>
              {/*<Pagination currentPage={currentPage} totalPages={totalPages} goToPage={ this.props.onPageClick }/>*/}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h1>Beacons</h1>
            <h2>No beacons found in the system</h2>
            <Link to="/beacons/new" className="btn btn-sm btn-success"> New Beacon </Link>
          </div>
        )
      }
    } else {
      return (
        <div>
          <h1>Beacons</h1>
          <p>Loading...</p>
        </div>
      )
    }
  }
  
  handleClick(event, beaconId) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onDeleteClick(beaconId);
  }
}

export default BeaconList;