import React, { Component } from 'react';

class Seated extends Component {
  render() {
    const { seated } = this.props;
    let alertType = "danger";
    let answer = "NO";
    if (seated) {
      alertType = "success";
      answer = "YES";
    }
    return (
      <div className="containerl">
        <header>
          <h5>Seated</h5>
        </header>
        <div className={`alert alert-${alertType}`} role="alert" style={{height: '200px'}}>
          {`${answer}`}
        </div>
      </div>
    );
  }
}

export default Seated;