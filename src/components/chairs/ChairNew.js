import React, { Component } from 'react';
import ChairForm from './ChairForm';
import { Redirect } from 'react-router-dom';

class ChairNew extends Component {
  render() {
    const { loading, onCreateClick, redirect } = this.props;

    if (redirect) {
      return (<Redirect to="/chairs" />);
    } else  {
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
}

export default ChairNew;