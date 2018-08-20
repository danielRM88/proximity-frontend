import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    let type = "bars";
    let color = "black";
    let proportions = "5%";

    return (
      <div className="loading">
        <ReactLoading type={type} color={color} height={proportions} width={proportions} />
        <h4>Loading...</h4>
      </div>
    );
  }
}

export default Loading;
