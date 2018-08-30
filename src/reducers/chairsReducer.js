import { GET_CHAIRS_REQUEST, GET_CHAIRS_SUCCESS, GET_CHAIRS_FAILURE } from "../actions/chairsActions"
import { CREATE_CHAIR_REQUEST, CREATE_CHAIR_SUCCESS, CREATE_CHAIR_FAILURE } from "../actions/chairsActions"
import { DELETE_CHAIR_REQUEST, DELETE_CHAIR_SUCCESS, DELETE_CHAIR_FAILURE } from "../actions/chairsActions"
import { GET_CHAIR_REQUEST, GET_CHAIR_SUCCESS, GET_CHAIR_FAILURE } from "../actions/chairsActions"
import { UPDATE_CHAIR_REQUEST, UPDATE_CHAIR_SUCCESS, UPDATE_CHAIR_FAILURE } from "../actions/chairsActions"
import { GET_CHAIR_DATA_REQUEST, GET_CHAIR_DATA_SUCCESS, GET_CHAIR_DATA_FAILURE, REFRESH_CHAIR_DATA_REQUEST } from "../actions/chairsActions"
import { START_CHAIR_CALIBRATION_REQUEST, START_CHAIR_CALIBRATION_SUCCESS, START_CHAIR_CALIBRATION_FAILURE } from "../actions/chairsActions"
import { GET_CALIBRATION_PROGRESS_REQUEST, GET_CALIBRATION_PROGRESS_SUCCESS, GET_CALIBRATION_PROGRESS_FAILURE } from "../actions/chairsActions"
import { UPDATE_FILTER_PROCESS_ERROR_REQUEST, UPDATE_FILTER_PROCESS_ERROR_SUCCESS, UPDATE_FILTER_PROCESS_ERROR_FAILURE } from "../actions/chairsActions"
import { UPDATE_GROUND_TRUTH_REQUEST, UPDATE_GROUND_TRUTH_SUCCESS, UPDATE_GROUND_TRUTH_FAILURE } from "../actions/chairsActions"

const initialState = {
  index: {chairs: [], loading: false, error: undefined},
  new: {chair: {}, loading: false, error: undefined},
  edit: {chair: {}, loading: false, error: undefined},
  panel: {predictions: [], loading: false, error: undefined}
};

const chairs = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case UPDATE_GROUND_TRUTH_REQUEST:
      return state;
    case UPDATE_GROUND_TRUTH_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_GROUND_TRUTH_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_FILTER_PROCESS_ERROR_REQUEST:
      return state;
    case UPDATE_FILTER_PROCESS_ERROR_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case UPDATE_FILTER_PROCESS_ERROR_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case GET_CALIBRATION_PROGRESS_REQUEST:
      return state;
    case GET_CALIBRATION_PROGRESS_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, 
                  loading: action.payload.loading, 
                  chair: { ...state.edit.chair, 
                              calibration: {...state.edit.chair.calibration, 
                                ongoing: action.payload.ongoing,
                                progress: action.payload.progress,
                                calibrated: action.payload.calibrated
                              } 
                  }
              }
      });
    case GET_CALIBRATION_PROGRESS_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case START_CHAIR_CALIBRATION_REQUEST:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case START_CHAIR_CALIBRATION_SUCCESS:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case START_CHAIR_CALIBRATION_FAILURE:
      return Object.assign({}, state, {
        edit: {...state.edit, ...action.payload}
      });
    case REFRESH_CHAIR_DATA_REQUEST:
      return state
    case GET_CHAIR_DATA_REQUEST:
      return Object.assign({}, state, {
        panel: {...state.panel, ...action.payload, predictions: []}
      });
    case GET_CHAIR_DATA_SUCCESS:
      return Object.assign({}, state, {
        panel: {...state.panel, ...action.payload}
      });
    case GET_CHAIR_DATA_FAILURE:
      return Object.assign({}, state, {
        panel: {...state.panel, ...action.payload}
      });
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
      return Object.assign({}, state, {
        index: {...state.index, ...action.payload}
      });
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