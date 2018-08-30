import { combineReducers } from 'redux'
import beacons from './beaconsReducer'
import chairs from './chairsReducer'
import algorithms from './algorithmsReducer'
import messages from './messagesReducer'
import { SET_REDIRECT_FALSE, SET_REDIRECT_TRUE } from '../actions/appActions'

const initialState = {
  redirect: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT_TRUE:
      return Object.assign({}, state, {
        ...state.app, redirect: true
      });
    case SET_REDIRECT_FALSE:
      return Object.assign({}, state, {
        ...state.app, redirect: false
      });
    default:
      return state;
  }
}

export default combineReducers({
  beacons,
  chairs,
  algorithms,
  app,
  messages
})