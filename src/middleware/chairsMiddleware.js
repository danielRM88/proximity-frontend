import { createChairService, getChairService, getChairsService, updateChairService, 
         deleteChairService, getChairDataService, startChairCalibrationService, 
         getCalibrationProgressService, updateFilterProcessErrorService, updateGroundTruthService } from '../services/chairsService'
import { getChairsRequest,
         getChairsSuccess,
         getChairsFailure,
         createChairRequest,
         createChairSuccess,
         createChairFailure,
         getChairRequest,
         getChairSuccess,
         getChairFailure,
         updateChairRequest,
         updateChairSuccess,
         updateChairFailure,
         deleteChairRequest,
         deleteChairSuccess,
         deleteChairFailure,
         getChairDataRequest,
         getChairDataSuccess,
         getChairDataFailure,
         startChairCalibrationRequest,
         startChairCalibrationSuccess,
         startChairCalibrationFailure,
         getCalibrationProgressRequest,
         getCalibrationProgressSuccess,
         getCalibrationProgressFailure,
         updateFilterProcessErrorRequest,
         updateFilterProcessErrorSuccess,
         updateFilterProcessErrorFailure,
         updateGroundTruthSuccess,
         updateGroundTruthFailure
       } from '../actions/chairsActions';
import { GET_CHAIRS_REQUEST, 
         GET_CHAIR_REQUEST, 
         CREATE_CHAIR_REQUEST, 
         UPDATE_CHAIR_REQUEST, 
         DELETE_CHAIR_REQUEST,
         GET_CHAIR_DATA_REQUEST, 
         REFRESH_CHAIR_DATA_REQUEST,
         START_CHAIR_CALIBRATION_REQUEST,
         GET_CALIBRATION_PROGRESS_REQUEST,
         UPDATE_FILTER_PROCESS_ERROR_REQUEST,
         UPDATE_GROUND_TRUTH_REQUEST } from '../actions/chairsActions';
import { setMessage, removeMessage } from '../actions/messagesActions';
import { setRedirectTrue } from '../actions/appActions';
import { browserHistory, hashHistory } from 'react-router-dom';
import { processErrorMessages } from '../utility/util';
import store from "../store/store";
import createBrowserHistory from  'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const chairsMiddleware = store => next => action => {
  next(action)
  switch (action.type) {
    case GET_CHAIRS_REQUEST:
      getChairsMiddlewareAction(next, action);
      break
    case CREATE_CHAIR_REQUEST:
      createChairMiddlewareAction(next, action);
      break
    case DELETE_CHAIR_REQUEST:
      deleteChairMiddlewareAction(next, action);
      break
    case GET_CHAIR_REQUEST:
      getChairMiddlewareAction(next, action);
      break
    case UPDATE_CHAIR_REQUEST:
      updateChairMiddlewareAction(next, action);
      break
    case GET_CHAIR_DATA_REQUEST:
      getChairDataMiddlewareAction(next, action);
      break
    case REFRESH_CHAIR_DATA_REQUEST:
      getChairDataMiddlewareAction(next, action);
      break
    case START_CHAIR_CALIBRATION_REQUEST:
      startChairCalibrationMiddlewareAction(next, action);
      break
    case GET_CALIBRATION_PROGRESS_REQUEST:
      getCalibrationProgressMiddlewareAction(next, action);
      break
    case UPDATE_FILTER_PROCESS_ERROR_REQUEST:
      updateFilterProcessErrorMiddlewareAction(next, action);
      break
    case UPDATE_GROUND_TRUTH_REQUEST:
      updateGroundTruthMiddlewareAction(next, action);
      break
    default:
      break
  }
};

function updateGroundTruthMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The ground truth could not be updated"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(updateGroundTruthFailure(err.message));
  };

  const success = () => {
    next(setMessage(["Ground truth updated successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(updateGroundTruthSuccess());
    // if (action.redirect) {
    //   hashHistory.push('/chairs/'+action.payload.chair.id;
    // }
  };

  updateGroundTruthService(action.payload.groundTruth, success, error);
};

function updateFilterProcessErrorMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The filter could not be updated"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(updateFilterProcessErrorFailure(err.message));
  };

  const success = () => {
    next(setMessage(["Filter updated successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(updateFilterProcessErrorSuccess());
    // if (action.redirect) {
    //   hashHistory.push('/chairs/'+action.payload.chair.id;
    // }
  };

  updateFilterProcessErrorService(action.payload.data, success, error);
};

function getCalibrationProgressMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getCalibrationProgressFailure(err.message));
  };

  const success = (response) => {
    next(getCalibrationProgressSuccess(response));
  };

  getCalibrationProgressService(action.payload.chairId, success, error);
};

function startChairCalibrationMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["Calibration could not be started"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(startChairCalibrationFailure(err.message));
  };

  const success = (response) => {
    next(setMessage(["Calibration started successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(startChairCalibrationSuccess(response.chair));
    // history = createHistory();
    // history.push('/chairs');
  };

  startChairCalibrationService(action.payload.calibration, success, error);
}

function getChairDataMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getChairDataFailure(err.message));
  };

  const success = (response) => {
    next(getChairDataSuccess(response.predictions));
  };

  getChairDataService(action.payload.chairId, action.payload.limit, success, error);
};

function createChairMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The chair could not be created"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(createChairFailure(err.message));
  };

  const success = (response) => {
    next(createChairSuccess(response));
    next(setRedirectTrue());
    next(setMessage(["Chair created successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    // history = createHistory();
    // history.push('/chairs');
  };

  createChairService(action.payload.chair, success, error);
}

function getChairsMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getChairsFailure(err.message));
  };

  const success = (response) => {
    next(getChairsSuccess(response));
  };

  getChairsService(action, success, error);
};

function getChairMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getChairFailure(err.message));
  };

  const success = (response) => {
    next(getChairSuccess(response));
  };

  getChairService(action.payload.chairId, success, error);
};

function updateChairMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The chair could not be updated"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(updateChairFailure(err.message));
  };

  const success = () => {
    next(setMessage(["Chair updated successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(updateChairSuccess());
    // customHistory.push('/chairs');
    // if (action.redirect) {
    //   hashHistory.push('/chairs/'+action.payload.chair.id;
    // }
  };

  updateChairService(action.payload.chair, success, error);
};

function deleteChairMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(deleteChairFailure(err.message));
  };

  const success = (response) => {
    next(setMessage(["Chair deleted successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(deleteChairSuccess());
    store.dispatch(getChairsRequest());
    // hashHistory.push('/chairs');
  };

  deleteChairService(action.payload.chairId, success, error);
};

export default chairsMiddleware;