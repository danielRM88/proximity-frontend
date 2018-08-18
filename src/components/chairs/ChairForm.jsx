import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Messages from '../utility/Messages';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import {config} from '../../config.js'

class ChairForm extends Component {
  componentDidMount() {
    let { id, name, notes, hasFilter } = this.props;
    this.setState({
      id,
      name,
      notes,
      hasFilter
    })
  }
  render() {
    let { id, name, notes, hasFilter } = this.props;
    return (
      
          <form onSubmit={(event) => this.handleClick(event)}>
            <div className="form-group">
              <label className="required" htmlFor="name">Name</label>
              <input type="text" ref="name" name="name" className="form-control" defaultValue={name} onChange={this.handleNameChange} autoFocus required/>
            </div>
            <div className="form-group">
              <label ref="brandLabel" htmlFor="notes">Notes</label>
              <textarea ref="notes" name="notes" className="form-control" defaultValue={notes} onChange={this.handleNotesChange}/>
            </div>
            <div className="form-group">
              <label ref="brandLabel" htmlFor="hasFilter">Apply Filter</label>
              <input type="checkbox" ref="notes" name="hasFilter" className="form-control" defaultChecked={hasFilter} onChange={this.handleHasFilterChange}/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary"> { id ? "Update" : "Create" } </button>
              &nbsp;
              <Link to="/chairs" className="btn btn-danger"> Cancel </Link>
            </div>
          </form>
    )
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value.trim()});
  }

  handleNotesChange = (event) => {
    this.setState({notes: event.target.value.trim()});
  }

  handleHasFilterChange = (event) => {
    this.setState({hasFilter: event.target.checked});
  }

  handleClick(event) {
    event.preventDefault();

    let { id } = this.props;
    // const data = new FormData(event.target);
    const data = {
      chair: {
        name: this.state.name,
        notes: this.state.notes,
        apply_filter: this.state.hasFilter
      }
    };
    
    let url = `${config.server}:${config.port}/chairs`;
    let method = 'POST'

    if (id) {
      url = `${config.server}:${config.port}/chairs/${id}`;
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
          'name': 'Name',
          'notes': 'Notes'
        }

        let m = [];
        for(var i=0; i<errors[key].length; i++){
          m[i] = `${dict[key]}: ${errors[key][i]}`
        }
        return m
      });
      ReactDOM.render(<Messages messages={messages} />, document.getElementById('messages'));
    } else {
      this.props.history.push("/chairs")
    }
  }
}

export default withRouter(ChairForm);