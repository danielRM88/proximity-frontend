import { GET_CHAIRS_REQUEST, GET_CHAIRS_SUCCESS, GET_CHAIRS_FAILURE } from "../actions/chairsActions"

const initialState = {
  index: {chairs: [], loading: false, error: undefined},
  new: {chairs: {}, loading: false, error: undefined},
  edit: {chairs: {}, loading: false, error: undefined},
  panel: {chairs: [], loading: false, error: undefined}
};

const chairs = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_CHAIRS_REQUEST:
      return Object.assign({}, state, {
        index: {...state.index, chairs: [], ...action.payload}
      });
    case GET_CHAIRS_SUCCESS:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    case GET_CHAIRS_FAILURE:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    default:
      return state;
  }
};

export default chairs;