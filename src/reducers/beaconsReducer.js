import { GET_BEACONS_REQUEST, GET_BEACONS_SUCCESS, GET_BEACONS_FAILURE } from "../actions/beaconsActions"
import { CREATE_BEACON_REQUEST, CREATE_BEACON_SUCCESS, CREATE_BEACON_FAILURE } from "../actions/beaconsActions"
import { GET_BEACON_REQUEST, GET_BEACON_SUCCESS, GET_BEACON_FAILURE } from "../actions/beaconsActions"
import { UPDATE_BEACON_REQUEST, UPDATE_BEACON_SUCCESS, UPDATE_BEACON_FAILURE } from "../actions/beaconsActions"
import { DELETE_BEACON_REQUEST, DELETE_BEACON_SUCCESS, DELETE_BEACON_FAILURE } from "../actions/beaconsActions"

const initialState = {
  index: {beacons: [], loading: false, error: undefined},
  new: {beacon: {}, loading: false, error: undefined},
  edit: {beacon: {}, loading: false, error: undefined},
  panel: {beacons: [], loading: false, error: undefined}
};

const beacons = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_BEACONS_REQUEST:
      return Object.assign({}, state, {
        index: {...state.index, beacons: [], ...action.payload}
      });
    case GET_BEACONS_SUCCESS:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    case GET_BEACONS_FAILURE:
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
    case CREATE_BEACON_REQUEST:
      return Object.assign({}, state, {
        new: {...state.new, ...action.payload}
      });
    case CREATE_BEACON_SUCCESS:
      return Object.assign({}, state, {
        new: {...state.new, beacon: {}, ...action.payload}
      });
    case CREATE_BEACON_FAILURE:
      return Object.assign({}, state, {
        new: {...state.new, ...action.payload}
      });
    case GET_BEACON_REQUEST:
      return Object.assign({}, state, {
        edit: {...state.edit, beacon: {}, ...action.payload}
      });
    case GET_BEACON_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case GET_BEACON_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_BEACON_REQUEST:
      return state;
    case UPDATE_BEACON_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_BEACON_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case DELETE_BEACON_REQUEST:
      return state;
    case DELETE_BEACON_SUCCESS:
      return Object.assign({}, state, {
        index: {...state.edit, ...action.payload}
      });
    case DELETE_BEACON_FAILURE:
      return Object.assign({}, state, {
        index: {...state.edit, ...action.payload}
      });
    default:
      return state;
  }
};

export default beacons;