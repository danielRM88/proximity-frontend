import React, { Component } from 'react';
import ChairForm from './ChairForm';

class ChairEdit extends Component {
  render() {
    const { id, loading, name, notes, hasFilter, onUpdateClick } = this.props
    return (
      <div>
        <h1>Edit Chair {name}</h1>
        <div className="row">
          <div className="col-sm-6">
            <ChairForm id={id}
                        name={name}
                        notes={notes}
                        hasFilter={hasFilter}
                        onActionClick={onUpdateClick} />
            { loading ? (<p>Loading...</p>) : "" }
          </div>
        </div>
      </div>
    )
  }
}

export default ChairEdit;