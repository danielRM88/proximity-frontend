import React, { Component } from 'react';
import ChairForm from './ChairForm';

class ChairNew extends Component {
  render() {
    return (
      <div>
        <h1>New Chair</h1>
        <div className="row">
          <div className="col-sm-6">
            <ChairForm />
          </div>
        </div>
      </div>
    )
  }
}

export default ChairNew;