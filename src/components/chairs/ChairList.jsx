import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Messages from '../utility/Messages';

import {config} from '../../config.js'

class ChairList extends Component {
  render() {

    let { chairFetch } = this.props;

    if (chairFetch.pending) {
      return <Loading />
    } else if (chairFetch.rejected) {
      if(chairFetch.meta.response !== undefined && chairFetch.meta.response.status === 404) {
        return <Error message="Beacons not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (chairFetch.fulfilled) {
      let chairs = chairFetch.value

      return (
        <div>
          <h1>Chairs</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th className="left-separator">Notes</th>
                <th className="left-separator">Has Filter</th>
                <th className="left-separator"></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                chairs.map((chair, i) => {
                  let id = chair["id"];
                  let name = chair["name"];
                  let notes = chair["notes"];
                  let hasFilter = chair["has_filter"];
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td className="left-separator">{notes}</td>
                      <td className="left-separator">{`${hasFilter}`}</td>
                      <td className="left-separator"><Link to={`/chairs/${id}/panel`} className="btn btn-sm btn-success"> Panel </Link></td>
                      <td><Link to={`/chairs/${id}/edit`} className="btn btn-sm btn-primary"> Edit </Link></td>
                      <td><button onClick={(event) => this.handleClick(event, id)} className="btn btn-sm btn-danger"> Delete </button></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/chairs/new" className="btn btn-small btn-primary"> Create </Link>
          </div>
        </div>
      )
    }
    
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();
    fetch(`${config.server}:${config.port}/chairs/${chairId}`, {
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
      this.props.chairsRefresh();
    }
  }

}

export default connect(props => ({
  chairFetch: {
    url: `${config.server}:${config.port}/chairs`
  },
  chairsRefresh: () => ({
     chairFetch: {
       url: `${config.server}:${config.port}/chairs`,
       force: true,
       refreshing: true
     }
   })
})) (ChairList)
