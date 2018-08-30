import { createBeaconService, getBeaconService, getBeaconsService, updateBeaconService, deleteBeaconService, getBeaconDataService, getBeaconDataFromChairService } from '../services/beaconsService'
import { getBeaconsRequest,
         getBeaconsSuccess,
         getBeaconsFailure,
         createBeaconRequest,
         createBeaconSuccess,
         createBeaconFailure,
         getBeaconRequest,
         getBeaconSuccess,
         getBeaconFailure,
         updateBeaconRequest,
         updateBeaconSuccess,
         updateBeaconFailure,
         deleteBeaconRequest,
         deleteBeaconSuccess,
         deleteBeaconFailure,
         getBeaconDataRequest,
         getBeaconDataFromChairRequest,
         getBeaconDataSuccess,
         getBeaconDataFailure
       } from '../actions/beaconsActions';
import { GET_BEACONS_REQUEST, 
         GET_BEACON_REQUEST, 
         CREATE_BEACON_REQUEST, 
         UPDATE_BEACON_REQUEST, 
         DELETE_BEACON_REQUEST, 
         GET_BEACON_DATA_REQUEST,
         GET_BEACON_DATA_FROM_CHAIR_REQUEST, 
         REFRESH_BEACON_DATA_REQUEST } from '../actions/beaconsActions';
import { setMessage, removeMessage } from '../actions/messagesActions';
import { setRedirectTrue } from '../actions/appActions';
import { browserHistory, hashHistory } from 'react-router-dom';
import store from "../store/store";
import { processErrorMessages } from '../utility/util';

const beaconsMiddleware = store => next => action => {
  next(action)
  switch (action.type) {
    case GET_BEACONS_REQUEST:
      getBeaconsMiddlewareAction(next, action);
      break
    case CREATE_BEACON_REQUEST:
      createBeaconMiddlewareAction(next, action);
      break
    case GET_BEACON_REQUEST:
      getBeaconMiddlewareAction(next, action);
      break
    case UPDATE_BEACON_REQUEST:
      updateBeaconMiddlewareAction(next, action);
      break
    case DELETE_BEACON_REQUEST:
      deleteBeaconMiddlewareAction(next, action);
      break
    case GET_BEACON_DATA_REQUEST:
      getBeaconDataMiddlewareAction(next, action);
      break
    case REFRESH_BEACON_DATA_REQUEST:
      getBeaconDataMiddlewareAction(next, action);
      break
    case GET_BEACON_DATA_FROM_CHAIR_REQUEST:
      getBeaconDataMiddlewareAction(next, action);
      break
    default:
      break
  }
};

function getBeaconDataMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getBeaconDataFailure(err.message));
  };

  const success = (response) => {
    next(getBeaconDataSuccess(response.beacons));
  };

  if (action.type === GET_BEACON_DATA_FROM_CHAIR_REQUEST) {
    getBeaconDataFromChairService(action.payload.chairId, action.payload.limit, success, error);
  } else {
    getBeaconDataService(action.payload.beacons, action.payload.limit, success, error);
  }
};

function createBeaconMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The beacon could not be created"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(createBeaconFailure(err.message));
  };

  const success = (response) => {
    next(createBeaconSuccess(response));
    next(setRedirectTrue());
    next(setMessage(["Beacon created successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    // history = createHistory();
    // history.push('/beacons');
  };

  createBeaconService(action.payload.beacon, success, error);
}

function getBeaconsMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getBeaconsFailure(err.message));
  };

  const success = (response) => {
    next(getBeaconsSuccess(response));
  };

  getBeaconsService(action, success, error);
};

function getBeaconMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getBeaconFailure(err.message));
  };

  const success = (response) => {
    next(getBeaconSuccess(response));
  };

  getBeaconService(action.payload.beaconId, success, error);
};

function updateBeaconMiddlewareAction(next, action) {
  const error = (err) => {
    let errors = ["The beacon could not be updated"];
    
    let body = err.response.body;
    let errorJson = {};
    if(body != undefined) {
      errorJson = body.errors
    }
    errors = errors.concat(processErrorMessages(errorJson));

    next(setMessage(errors, "error"));
    next(updateBeaconFailure(err.message));
  };

  const success = () => {
    next(setMessage(["Beacon updated successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(updateBeaconSuccess());
    // if (action.redirect) {
    //   hashHistory.push('/beacons/'+action.payload.beacon.id;
    // }
  };

  updateBeaconService(action.payload.beacon, success, error);
};

function deleteBeaconMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(deleteBeaconFailure(err.message));
  };

  const success = (response) => {
    next(setMessage(["Beacon deleted successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(deleteBeaconSuccess());
    store.dispatch(getBeaconsRequest());
    // hashHistory.push('/beacons');
  };

  deleteBeaconService(action.payload.beaconId, success, error);
};

export default beaconsMiddleware;