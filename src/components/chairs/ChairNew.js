import React, { Component } from 'react';
import ChairForm from './ChairForm';

class ChairNew extends Component {
  render() {
    const { loading, onCreateClick } = this.props
    return (
      <div>
        <h1>New Chair</h1>
        <div className="row">
          <div className="col-sm-6">
            <ChairForm onActionClick={onCreateClick} />
            { loading ? (<p>Loading...</p>) : "" }
          </div>
        </div>
      </div>
    )
  }
}

export default ChairNew;