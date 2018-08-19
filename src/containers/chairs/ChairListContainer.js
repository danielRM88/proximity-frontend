import ChairList from '../../components/chairs/ChairList'
import { deleteChairRequest, getChairsRequest } from '../../actions/chairsActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  
  const chairsState = state.chairs;
  const indexState = chairsState.index;

  const chairs = indexState.chairs;
  const loading = indexState.loading;

  return ({
    loading,
    chairs
  })
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick(chairId) {
    dispatch(deleteChairRequest(chairId));
  },
  onPageClick() {
    dispatch(getChairsRequest());
  }
});

const ChairsListContainer = connect(mapStateToProps, mapDispatchToProps)(ChairList);
export default ChairsListContainer;