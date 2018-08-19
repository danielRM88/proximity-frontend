import { combineReducers } from 'redux'
import beacons from './beaconsReducer'
import chairs from './chairsReducer'
import messages from './messagesReducer'

export default combineReducers({
  beacons,
  chairs,
  messages
})