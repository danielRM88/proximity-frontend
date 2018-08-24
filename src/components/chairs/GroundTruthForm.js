import React, { Component } from 'react';
import Select from 'react-select';
import ConfutionMatrixTable from './ConfutionMatrixTable'

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
    let { chairId, active, seated, gender, height, weight, tn, fp, tp, fn, accuracy, precision, recall, specificity } = this.props;
    let selectedOption;
    if (gender === 'male') {
      selectedOption = { value: 'male', label: 'Male' };
    } else {
      selectedOption = { value: 'female', label: 'Female' };
    }
    return (
      <form onSubmit={(event) => this.handleClick(event, chairId)}>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="active">Recording</label><br/>
              <input type="checkbox" name="active" defaultChecked={active} onChange={(event) => {this.handleActiveChange(event, this)}} />
            </div>
            <div className="form-group">
              <label htmlFor="seated">Seated</label><br/>
              <input type="checkbox" name="seated" defaultChecked={seated} onChange={(event) => {this.handleSeatedChange(event, this)}} />
            </div>
          </div>
          <div className="col-sm-8">
            <ConfutionMatrixTable tn={tn} 
                                  fp={fp}
                                  tp={tp}
                                  fn={fn}
                                  accuracy={accuracy}
                                  precision={precision}
                                  recall={recall}
                                  specificity={specificity}/>
          </div>
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