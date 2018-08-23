import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../Loading';

class KMeansPanel extends Component {
  componentDidMount() {
    let { refreshKMeansDataRequest, chairId } = this.props;
    this.interval = setInterval(() => { refreshKMeansDataRequest(chairId); }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading, data, limit } = this.props;
    if (!loading) {
      if(data.length > 0) {
        return (
          <div className="beacon-panel">
            <div className="row">
              <div className="col-sm-12">
                <h5>Algorithm</h5>
              </div>
            </div>
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                <Chart
                  chartType="ComboChart"
                  data={data}
                  width="100%"
                  height="425px"
                  options={{
                    title: "K-means",
                    hAxis: { title: "", viewWindow: { min: -1, max: 1 } },
                    vAxis: { title: "", viewWindow: { min: -80, max: -60 } },
                    legend: { position: "none" },
                    seriesType: 'scatter',
                    interpolateNulls: true
                  }}
                  legendToggle
                />
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="panel">
          <header>
            <h1>K-means</h1>
          </header>
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
  }
}

export default KMeansPanel;