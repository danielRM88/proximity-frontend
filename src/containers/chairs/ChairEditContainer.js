import ChairEdit from '../../components/chairs/ChairEdit'
import { connect } from 'react-redux';
import { updateChairRequest } from '../../actions/chairsActions';

const mapStateToProps = (state) => {
  const editState = state.chairs.edit;
  const loading = editState.loading;
  const id = editState.chair.id;
  const name = editState.chair.name;
  const notes = editState.chair.notes;
  const hasFilter = editState.chair.has_filter;

  return ({
    id,
    name, 
    notes,
    hasFilter,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (chair) => { 
    dispatch(updateChairRequest(chair))
  }
});

const ChairEditContainer = connect(mapStateToProps, mapDispatchToProps)(ChairEdit);
export default ChairEditContainer;