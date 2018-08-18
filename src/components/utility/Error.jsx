import React, { Component } from 'react';

class Error extends Component {
  render() {
    let { message } = this.props;

    return (
      <div className="error">
        <p>{message}</p>
      </div>
    );
  }
}

export default Error;
