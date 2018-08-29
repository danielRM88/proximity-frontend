import { getKMeansDataService } from '../services/algorithmsService'
import { getKMeansDataSuccess, getKMeansDataFailure } from '../actions/algorithmsActions';
import { GET_KMEANS_DATA_REQUEST, REFRESH_KMEANS_DATA_REQUEST } from '../actions/algorithmsActions';
import { setMessage, removeMessage } from '../actions/messagesActions';
import { browserHistory, hashHistory } from 'react-router-dom';
import { processErrorMessages } from '../utility/util';
import store from "../store/store";

const algorithmsMiddleware = store => next => action => {
  next(action)
  switch (action.type) {
    case GET_KMEANS_DATA_REQUEST:
      getKMeansDataMiddlewareAction(next, action);
      break
    case REFRESH_KMEANS_DATA_REQUEST:
      getKMeansDataMiddlewareAction(next, action);
      break
    default:
      break
  }
};

function getKMeansDataMiddlewareAction(next, action) {
  const error = (err) => {
    next(setMessage([err.message], "error"));
    next(getKMeansDataFailure(err.message));
  };

  const success = (response) => {
    next(getKMeansDataSuccess(response.chair_id, response.data, response.seated, response.performance));
  };

  getKMeansDataService(action.payload.chairId, 1, success, error);
};

export default algorithmsMiddleware;