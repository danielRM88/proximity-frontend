import { createChairService, getChairService, getChairsService, updateChairService, deleteChairService, getChairDataService } from '../services/chairsService'
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
         getChairDataFailure
       } from '../actions/chairsActions';
import { GET_CHAIRS_REQUEST, 
         GET_CHAIR_REQUEST, 
         CREATE_CHAIR_REQUEST, 
         UPDATE_CHAIR_REQUEST, 
         DELETE_CHAIR_REQUEST,
         GET_CHAIR_DATA_REQUEST, 
         REFRESH_CHAIR_DATA_REQUEST } from '../actions/chairsActions';
import { setMessage, removeMessage } from '../actions/messagesActions';
import { browserHistory, hashHistory } from 'react-router-dom';
import { processErrorMessages } from '../utility/util';
import store from "../store/store";

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
    default:
      break
  }
};

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
    next(setMessage(["Chair created successfully"], "success")); // not gonna show because of route change ??? how to fix ???
    next(createChairSuccess(response));
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