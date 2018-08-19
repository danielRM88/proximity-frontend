import ChairNew from '../../components/chairs/ChairNew'
import { connect } from 'react-redux';
import { createChairRequest } from '../../actions/chairsActions';

const mapStateToProps = (state) => {
  const loading = state.chairs.new.loading;

  return ({
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  onCreateClick: (chair) => { 
    dispatch(createChairRequest(chair))
  }
});

const ChairNewContainer = connect(mapStateToProps, mapDispatchToProps)(ChairNew);
export default ChairNewContainer;