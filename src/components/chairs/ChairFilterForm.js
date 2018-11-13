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
    let { chairId, processNoise, continuousAdjustment, adjustmentThreshold } = this.props;
    return (
      <form onSubmit={(event) => this.handleClick(event, chairId)}>
        <div className="form-group">
          <label className="required" htmlFor="processNoise">Filter's Process Noise (V1)</label>
          <input type="number" step="any" name="processNoise" className="form-control" defaultValue={processNoise} onChange={(event) => {this.handleProcessNoiseChange(event, this)}} autoFocus required/>
        </div>
        {/*<div className="form-group">
          <label htmlFor="continuousAdjustment">Continuous Adjustment</label>
          <input type="checkbox" name="continuousAdjustment" className="form-control" defaultChecked={continuousAdjustment} onChange={(event) => {this.handleAdjustmentChange(event, this)}} />
        </div>
        <div className="form-group">
          <label className="required" htmlFor="adjustmentThreshold">Adjustment Threshold</label>
          <input type="number" step="any" name="adjustmentThreshold" className="form-control" defaultValue={adjustmentThreshold} onChange={(event) => {this.handleAdjustmentThresholdChange(event, this)}} autoFocus required/>
        </div>*/}
        <div className="text-center">
          <button type="submit" className="btn btn-primary"> Update Filter </button>
        </div>
      </form>
    );
  }

  handleProcessNoiseChange(event, component) {
    component.setState({processNoise: event.target.value.trim()});
  }

  handleAdjustmentChange(event, component) {
    component.setState({continuousAdjustment: event.target.checked});
  }

  handleAdjustmentThresholdChange(event, component) {
    component.setState({adjustmentThreshold: event.target.value.trim()});
  }

  handleClick(event, chairId) {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      chairId: chairId,
      processNoise: this.state.processNoise,
      continuousAdjustment: this.state.continuousAdjustment,
      adjustmentThreshold: this.state.adjustmentThreshold
    };
    this.props.onActionClick(data, this.state.processNoise);
  }
}

export default ChairFilterForm;