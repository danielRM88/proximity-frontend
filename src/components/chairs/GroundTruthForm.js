import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];

class GroundTruthForm extends Component {
  componentDidMount() {
    let { chairId, active, seated, gender, height, weight } = this.props;
    let selectedOption;
    if (gender === 'male') {
      selectedOption = { value: 'male', label: 'Male' };
    } else {
      selectedOption = { value: 'female', label: 'Female' };
    }
    this.setState({
      chairId,
      active,
      seated,
      gender,
      height,
      weight,
      selectedOption
    })
  }

  render () {
    let { chairId, active, seated, gender, height, weight } = this.props;
    let selectedOption;
    if (gender === 'male') {
      selectedOption = { value: 'male', label: 'Male' };
    } else {
      selectedOption = { value: 'female', label: 'Female' };
    }
    return (
      <form onSubmit={(event) => this.handleClick(event, chairId)}>
        <div className="row">
          <div className="form-group col-sm-4">
            <label htmlFor="active">Active</label><br/>
            <input type="checkbox" name="active" defaultChecked={active} onChange={(event) => {this.handleActiveChange(event, this)}} />
          </div>
          {/*<div className="col-sm-8">
            <table className="table-sm table-striped table-hover">
              <thead>
                <tr>
                  <th>FP</th>
                  <th>TP</th>
                  <th>NP</th>
                  <th>TN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50%</td>
                  <td>80%</td>
                  <td>80%</td>
                  <td>80%</td>
                </tr>
              </tbody>
            </table>
          </div>*/}
        </div>
        <div className="form-group">
          <label htmlFor="seated">Seated</label>
          <input type="checkbox" name="seated" className="form-control" defaultChecked={seated} onChange={(event) => {this.handleSeatedChange(event, this)}} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <Select
            defaultValue={selectedOption}
            onChange={(newOption) => { this.handleChange(newOption, this) } }
            options={options}
          />
        </div>
        <div className="form-group">
          <label className="required" htmlFor="height">Height</label>
          <input type="number" step="any" name="height" className="form-control" defaultValue={height} onChange={(event) => {this.handleHeightChange(event, this)}} autoFocus required/>
        </div>
        <div className="form-group">
          <label className="required" htmlFor="weight">Weight</label>
          <input type="number" step="any" name="weight" className="form-control" defaultValue={weight} onChange={(event) => {this.handleWeightChange(event, this)}} autoFocus required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> Update Ground Truth </button>
        </div>
      </form>
    );
  }

  handleActiveChange(event, component) {
    component.setState({active: event.target.checked});
  }

  handleSeatedChange(event, component) {
    component.setState({seated: event.target.checked});
  }

  handleHeightChange(event, component) {
    component.setState({height: event.target.value.trim()});
  }

  handleWeightChange(event, component) {
    component.setState({weight: event.target.value.trim()});
  }

  handleChange(newOption, component) {
    component.setState({ selectedOption: newOption });
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      chairId: chairId,
      active: this.state.active,
      seated: this.state.seated,
      gender: this.state.selectedOption.value,
      height: this.state.height,
      weight: this.state.weight
    };
    this.props.onClickAction(data);
  }
}

export default GroundTruthForm;