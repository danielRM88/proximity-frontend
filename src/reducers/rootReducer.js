import { combineReducers } from 'redux'
import beacons from './beaconsReducer'
import chairs from './chairsReducer'
import algorithms from './algorithmsReducer'
import messages from './messagesReducer'

export default combineReducers({
  beacons,
  chairs,
  algorithms,
  messages
})