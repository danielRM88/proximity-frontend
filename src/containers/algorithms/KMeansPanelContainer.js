import KMeansPanel from '../../components/algorithms/KMeansPanel'
import { connect } from 'react-redux';
import { refreshKMeansDataRequest } from '../../actions/algorithmsActions';

const mapStateToProps = (state) => {
  const kmeansState = state.algorithms.kmeans;
  const data = kmeansState.data;
  const loading = kmeansState.loading;
  const chairId = kmeansState.chairId;

  return ({
    chairId,
    data,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  refreshKMeansDataRequest: (chairId) => { 
    if(chairId !== undefined) {
      dispatch(refreshKMeansDataRequest(chairId, 1));
    }
  }
});

const KMeansPanelContainer = connect(mapStateToProps, mapDispatchToProps)(KMeansPanel);
export default KMeansPanelContainer;