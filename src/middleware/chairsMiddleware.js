import { getChairsService } from '../services/chairsService'
import { getChairsRequest,
         getChairsSuccess,
         getChairsFailure
       } from '../actions/chairsActions';
import { GET_CHAIRS_REQUEST } from '../actions/chairsActions';
import { setMessage, removeMessage } from '../actions/messagesActions';
import { browserHistory, hashHistory } from 'react-router-dom';
import { processErrorMessages } from '../utility/util';

const chairsMiddleware = store => next => action => {
  next(action)
  switch (action.type) {
    case GET_CHAIRS_REQUEST:
      getChairsMiddlewareAction(next, action);
      break
    default:
      break
  }
};

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

export default chairsMiddleware;