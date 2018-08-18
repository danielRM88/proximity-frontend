import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Messages from '../utility/Messages';
import AsyncSelect from 'react-select/lib/Async';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import './beacons.css';

import {config} from '../../config.js'

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    fetch(`${config.server}:${config.port}/chairs`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      let myOptions = [{value: "", label: "No Chair"}];
      let chairs = data.map((chair, index) => {
        return { value: chair["id"], label: chair["name"] }
      });
      myOptions = myOptions.concat(chairs);
      callback(myOptions);
    });

  }, 1000);
};

class BeaconForm extends Component {
  componentDidMount() {
    let { macAddress, brand, model, chairId } = this.props;
    this.setState({
      selectedOption: {value: "", label: "No Chair"},
      macAddress,
      brand,
      model,
      chairId
    })
  }
  render() {
    let { id, macAddress, brand, model, chairId, chairName } = this.props;
    let defaultOption = {value: chairId, label: chairName};

    if (chairId === undefined || chairId == null) {
      defaultOption = {value: "", label: "No Chair"}
    }

    return (
      
          <form onSubmit={(event) => this.handleClick(event)}>
            <div className="form-group">
              <label ref="macAddressLabel" className="required" htmlFor="macAddress">Mac Address</label>
              <input type="text" ref="macAddress" name="macAddress" className="form-control" defaultValue={macAddress} onChange={this.handleMacChange} autoFocus required/>
            </div>
            <div className="form-group">
              <label ref="brandLabel" htmlFor="brand">Brand</label>
              <input type="text" ref="brand" name="brand" className="form-control" defaultValue={brand} onChange={this.handleBrandChange}/>
            </div>
            <div className="form-group">
              <label ref="modelLabel" htmlFor="model">Model</label>
              <input type="text" ref="model" name="model" className="form-control" defaultValue={model} onChange={this.handleModelChange}/>
            </div>
            <div className="form-group">
              <label ref="chairLabel" htmlFor="chair">Chair</label>
              <AsyncSelect
                ref="chair"
                defaultValue={defaultOption}
                onChange={this.handleChange}
                loadOptions={loadOptions}
                defaultOptions
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary"> { id ? "Update" : "Create" } </button>
              &nbsp;
              <Link to="/beacons" className="btn btn-danger"> Cancel </Link>
            </div>
          </form>
    )
  }

  handleMacChange = (event) => {
    this.setState({macAddress: event.target.value.trim()});
  }

  handleBrandChange = (event) => {
    this.setState({brand: event.target.value.trim()});
  }

  handleModelChange = (event) => {
    this.setState({model: event.target.value.trim()});
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  handleClick(event) {
    event.preventDefault();

    let { id } = this.props;
    // const data = new FormData(event.target);
    const data = {
      beacon: {
        mac_address: this.state.macAddress,
        brand: this.state.brand,
        model: this.state.model,
        chair_id: this.state.selectedOption.value
      }
    };
    
    let url = `${config.server}:${config.port}/beacons`;
    let method = 'POST'

    if (id) {
      url = `${config.server}:${config.port}/beacons/${id}`;
      method = 'PUT'
    }

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => this.handleResponse(data));
  }

  handleResponse(data) {
    console.log(data);
    let status = data.status;
    if (status !== 200) {
      let errors = data.errors;
      console.log(errors);
      let messages = [];
      messages = Object.keys(errors).map(function (key) {

        let dict = {
          'mac_address': 'Mac Address',
          'brand': 'Brand',
          'model': 'Model'
        }

        let m = [];
        for(var i=0; i<errors[key].length; i++){
          m[i] = `${dict[key]}: ${errors[key][i]}`
        }
        return m
      });
      ReactDOM.render(<Messages messages={messages} />, document.getElementById('messages'));
    } else {
      this.props.history.push("/beacons")
    }
  }
}

export default withRouter(BeaconForm);