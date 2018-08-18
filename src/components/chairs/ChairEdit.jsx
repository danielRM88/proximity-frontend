import React, { Component } from 'react';
import { connect } from 'react-refetch';
import Loading from './../utility/Loading';
import Error from './../utility/Error';
import ChairForm from './ChairForm';

import {config} from '../../config.js'

class ChairEdit extends Component {
  render() {

    let { chairFetch } = this.props;

    if (chairFetch.pending) {
      return <Loading />
    } else if (chairFetch.rejected) {
      if(chairFetch.meta.response !== undefined && chairFetch.meta.response.status === 404) {
        return <Error message="Chair not found!" />
      }
      return <Error message="Problem fetching data!" />
    } else if (chairFetch.fulfilled) {
      let chair = chairFetch.value
      let id = chair["id"];
      let name = chair["name"]
      let notes = chair["notes"];
      let hasFilter = chair["has_filter"];

      return (
        <div>
          <h1>Edit Chair {name}</h1>
          <div className="row">
            <div className="col-sm-6">
              <ChairForm id={id} name={name} notes={notes} hasFilter={hasFilter} />
            </div>
          </div>
        </div>
      )
    }
    
  }
}

export default connect(props => ({
  chairFetch: {
    url: `${config.server}:${config.port}/chairs/${props.match.params.id}`
  }
})) (ChairEdit)