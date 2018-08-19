import React, { Component } from 'react';
import BeaconForm from './BeaconForm';

class BeaconEdit extends Component {
  render() {
    const { loading, selectOptions, selectedOption, onUpdateClick } = this.props
    const { id, mac_address, brand, model } = this.props.beacon;
    return (
      <div>
        <h1>Edit Beacon {mac_address}</h1>
        <div className="row">
          <div className="col-sm-6">
            <BeaconForm id={id}
                        macAddress={mac_address}
                        brand={brand}
                        model={model}
                        onActionClick={onUpdateClick} 
                        selectOptions={selectOptions} 
                        selectedOption={selectedOption} />
            { loading ? (<p>Loading...</p>) : "" }
          </div>
        </div>
      </div>
    )
  }
}

export default BeaconEdit;