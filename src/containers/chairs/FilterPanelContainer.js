import FilterPanel from '../../components/chairs/FilterPanel'
import { connect } from 'react-redux';
import { refreshChairDataRequest } from '../../actions/chairsActions';

const mapStateToProps = (state) => {
  const panelState = state.chairs.panel;
  const loading = panelState.loading;
  const chair = state.chairs.edit.chair;
  const predictions = panelState.predictions;
  let maxMeasurements = 0;
  let data = [];
  let variance = [];

  if (predictions !== undefined && chair!== undefined && chair.has_filter) {
    maxMeasurements = predictions.length;
    if (maxMeasurements > 0) {
      data = [["", "State estimate"]];
      variance = [["", "P"]];
    }
    predictions.map((prediction, index) => {
      data.push([index+1, prediction.filter_result]);
      variance.push([index+1, prediction.filter_variance]);
    });
  }

  return ({
    chair,
    data,
    variance,
    loading,
    limit: maxMeasurements
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshData: (chairId) => { 
    if(chairId !== undefined) {
      dispatch(refreshChairDataRequest(chairId, 200));
    }
  }
});

const FilterPanelContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
export default FilterPanelContainer;