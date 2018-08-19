import { GET_CHAIRS_REQUEST, GET_CHAIRS_SUCCESS, GET_CHAIRS_FAILURE } from "../actions/chairsActions"
import { CREATE_CHAIR_REQUEST, CREATE_CHAIR_SUCCESS, CREATE_CHAIR_FAILURE } from "../actions/chairsActions"
import { DELETE_CHAIR_REQUEST, DELETE_CHAIR_SUCCESS, DELETE_CHAIR_FAILURE } from "../actions/chairsActions"
import { GET_CHAIR_REQUEST, GET_CHAIR_SUCCESS, GET_CHAIR_FAILURE } from "../actions/chairsActions"
import { UPDATE_CHAIR_REQUEST, UPDATE_CHAIR_SUCCESS, UPDATE_CHAIR_FAILURE } from "../actions/chairsActions"

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
    case CREATE_CHAIR_REQUEST:
      return Object.assign({}, state, {
        new: {...state.new, ...action.payload}
      });
    case CREATE_CHAIR_SUCCESS:
      return Object.assign({}, state, {
        new: {...state.new, chair: {}, ...action.payload}
      });
    case CREATE_CHAIR_FAILURE:
      return Object.assign({}, state, {
        new: {...state.new, ...action.payload}
      });
    case GET_CHAIR_REQUEST:
      return Object.assign({}, state, {
        edit: {...state.edit, chair: {}, ...action.payload}
      });
    case GET_CHAIR_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case GET_CHAIR_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_CHAIR_REQUEST:
      return state;
    case UPDATE_CHAIR_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_CHAIR_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case DELETE_CHAIR_REQUEST:
      return state;
    case DELETE_CHAIR_SUCCESS:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    case DELETE_CHAIR_FAILURE:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    default:
      return state;
  }
};

export default chairs;