import { GET_KMEANS_DATA_REQUEST, GET_KMEANS_DATA_SUCCESS, GET_KMEANS_DATA_FAILURE } from "../actions/algorithmsActions"

const initialState = {
  kmeans: {data: [], loading: false, error: undefined}
};

const algorithms = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case GET_KMEANS_DATA_REQUEST:
      return Object.assign({}, state, {
        kmeans: {...state.panel, ...action.payload, data: []}
      });
    case GET_KMEANS_DATA_SUCCESS:
      return Object.assign({}, state, {
        kmeans: {...state.panel, ...action.payload}
      });
    case GET_KMEANS_DATA_FAILURE:
      return Object.assign({}, state, {
        kmeans: {...state.panel, ...action.payload}
      });
    default:
      return state;
  }
};

export default algorithms;