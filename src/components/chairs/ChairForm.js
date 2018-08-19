import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChairForm extends Component {
  componentDidMount() {
    let { id, name, notes, hasFilter } = this.props;
    this.setState({
      id,
      name,
      notes,
      applyFilter: hasFilter
    })
  }

  render () {
    let { id, name, notes, hasFilter, loading } = this.props;
    return (
      <form onSubmit={(event) => this.handleClick(event, id)}>
        <div className="form-group">
          <label className="required" htmlFor="name">Name</label>
          <input type="text" name="name" className="form-control" defaultValue={name} onChange={(event) => {this.handleNameChange(event, this)}} autoFocus required/>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" className="form-control" defaultValue={notes} onChange={(event) => {this.handleNotesChange(event, this)}} />
        </div>
        <div className="form-group">
          <label htmlFor="applyFilter">Apply Filter</label>
          <input type="checkbox" name="applyFilter" className="form-control" defaultChecked={hasFilter} onChange={(event) => {this.handleFilterChange(event, this)}} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> { id ? "Update" : "Create" } </button>
          &nbsp;
          <Link to="/chairs" className="btn btn-danger"> Cancel </Link>
        </div>
      </form>
    );
  }

  handleNameChange(event, component) {
    component.setState({name: event.target.value.trim()});
  }

  handleNotesChange(event, component) {
    component.setState({notes: event.target.value.trim()});
  }

  handleFilterChange(event, component) {
    component.setState({applyFilter: event.target.checked});
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();

    const chair = {
      id: chairId,
      name: this.state.name,
      notes: this.state.notes,
      apply_filter: this.state.applyFilter
    };

    this.props.onActionClick(chair);
  }
}

export default ChairForm;