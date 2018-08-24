import React, { Component } from 'react';

class ConfutionMatrixTable extends Component {
  render() {
    let { tn, fp, tp, fn, accuracy, precision, recall, specificity } = this.props;
    return (
      <div>
        <table className="table-sm table-striped table-hover">
          <thead>
            <tr>
              <th>TN</th>
              <th>FP</th>
              <th>TP</th>
              <th>FN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tn}</td>
              <td>{fp}</td>
              <td>{tp}</td>
              <td>{fn}</td>
            </tr>
          </tbody>
        </table>
        <table className="table-sm table-striped table-hover">
          <thead>
            <tr>
              <th>P</th>
              <th>R</th>
              <th>A</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{precision}</td>
              <td>{recall}</td>
              <td>{accuracy}</td>
              <td>{specificity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConfutionMatrixTable;