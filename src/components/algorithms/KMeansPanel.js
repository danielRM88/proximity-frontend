import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../Loading';

class KMeansPanel extends Component {
  componentDidMount() {
    console.log("mounted");
    let { refreshKMeansDataRequest, chairId } = this.props;
    this.interval = setInterval(() => { refreshKMeansDataRequest(chairId); }, 500);
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.interval);
  }

  render() {
    const { loading, data, limit } = this.props;
    if (!loading) {
      if(data.length > 0) {
        return (
          <div className="algorithm-panel">
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                <Chart
                  chartType="ComboChart"
                  data={data}
                  width="100%"
                  height="400px"
                  options={{
                    title: "K-means",
                    hAxis: { title: "", viewWindow: { min: -1, max: 1 } },
                    vAxis: { title: "", viewWindow: { min: -100, max: -50 } },
                    legend: { position: "none" },
                    seriesType: 'scatter',
                    interpolateNulls: true,
                    pointSize: 15,
                    colors: ['#C3E6CB', '#F5C6CB', '#EF851C'],
                    series: {
                        0: { pointShape: 'circle' },
                        1: { pointShape: 'circle' },
                        2: { pointShape: 'square' }
                    }
                  }}
                  legendToggle
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="beacon-panel">
            <div className="row">
              <div className="col-sm-12">
                <h5>K-means</h5>
              </div>
            </div>
            <div className="row">
              <div id="chartSection" className="col-sm-12">
                No available data to display
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