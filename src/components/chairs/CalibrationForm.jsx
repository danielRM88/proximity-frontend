import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Messages from '../utility/Messages';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import {config} from '../../config.js'

class CalibrationForm extends Component {
  componentDidMount() {
    let { noRecords, chairId } = this.props;
    this.setState({
      noRecords,
      chairId
    })
  }
  render() {
    let { noRecords } = this.props;
    return (
      <form onSubmit={(event) => this.handleClick(event)}>
        <div className="form-group">
          <label className="required" htmlFor="noRecords">Number of Measurements to Calibrate</label>
          <input type="text" ref="noRecords" name="noRecords" className="form-control" defaultValue={noRecords} onChange={this.handleNoRecordsChange} autoFocus required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> Start </button>
          &nbsp;
          <Link to="/chairs" className="btn btn-danger"> Cancel </Link>
        </div>
      </form>
    )
  }

  handleNoRecordsChange = (event) => {
    this.setState({noRecords: event.target.value.trim()});
  }

  handleClick(event) {
    event.preventDefault();
    // const data = new FormData(event.target);
    const data = {
      calibration: {
        records_to_calibrate: this.state.noRecords
      }
    };
    
    let url = `${config.server}:${config.port}/chairs/${this.state.chairId}/start_calibration`;
    let method = 'POST'

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => this.handleResponse(data, this.state.chairId));
  }

  handleResponse(data, chairId) {
    console.log(data);
    let status = data.status;
    if (status !== 200) {
      ReactDOM.render(<Messages messages={[[data.error]]} />, document.getElementById('messages'));
    } else {
      this.props.history.push(`/chairs/${chairId}/panel`);
    }
  }
}

export default withRouter(CalibrationForm);