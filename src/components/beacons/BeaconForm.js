import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

class BeaconForm extends Component {
  componentDidMount() {
    let { id, macAddress, brand, model, selectOptions, selectedOption } = this.props;
    this.setState({
      id,
      macAddress,
      brand,
      model,
      selectOptions,
      selectedOption
    })
  }

  render () {
    let { id, macAddress, brand, model, loading, selectOptions, selectedOption } = this.props;
    return (
      <form onSubmit={(event) => this.handleClick(event, id)}>
        <div className="form-group">
          <label className="required" htmlFor="macAddress">Mac Address</label>
          <input type="text" name="macAddress" className="form-control" defaultValue={macAddress} onChange={(event) => {this.handleMacChange(event, this)}} autoFocus required/>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" className="form-control" defaultValue={brand} onChange={(event) => {this.handleBrandChange(event, this)}} />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input type="text" name="model" className="form-control" defaultValue={model} onChange={(event) => {this.handleModelChange(event, this)}} />
        </div>
        <div className="form-group">
          <label>Chair</label>
          <Select
            defaultValue={selectedOption}
            onChange={(newOption) => { this.handleChange(newOption, this) } }
            options={selectOptions}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> { id ? "Update" : "Create" } </button>
          &nbsp;
          <Link to="/beacons" className="btn btn-danger"> Cancel </Link>
        </div>
      </form>
    );
  }

  handleMacChange(event, component) {
    component.setState({macAddress: event.target.value.trim()});
  }

  handleBrandChange(event, component) {
    component.setState({brand: event.target.value.trim()});
  }

  handleModelChange(event, component) {
    component.setState({model: event.target.value.trim()});
  }

  handleChange(newOption, component) {
    component.setState({ selectedOption: newOption });
  }

  handleClick(event, beaconId) {
    event.preventDefault();
    event.stopPropagation();

    const beacon = {
      id: beaconId,
      mac_address: this.state.macAddress,
      brand: this.state.brand,
      model: this.state.model,
      chair_id: this.state.selectedOption.value
    };

    this.props.onActionClick(beacon);
  }
}

export default BeaconForm;