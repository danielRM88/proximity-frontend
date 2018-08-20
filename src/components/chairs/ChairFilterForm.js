import React, { Component } from 'react';

class ChairFilterForm extends Component {
  componentDidMount() {
    let { chairId, processNoise } = this.props;
    this.setState({
      chairId,
      processNoise
    })
  }

  render () {
    let { chairId, processNoise } = this.props;
    return (
      <form onSubmit={(event) => this.handleClick(event, chairId)}>
        <div className="form-group">
          <label className="required" htmlFor="processNoise">Filter's Process Noise (V1)</label>
          <input type="number" step="any" name="processNoise" className="form-control" defaultValue={processNoise} onChange={(event) => {this.handleProcessNoiseChange(event, this)}} autoFocus required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> Update Filter </button>
        </div>
      </form>
    );
  }

  handleProcessNoiseChange(event, component) {
    component.setState({processNoise: event.target.value.trim()});
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();

    // const data = {
    //   chair_id: chairId,
    //   process_noise: processNoise
    // };
    this.props.onActionClick(chairId, this.state.processNoise);
  }
}

export default ChairFilterForm;