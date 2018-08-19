import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from './components/App';
import BeaconListContainer from './containers/beacons/BeaconListContainer';
import BeaconNewContainer from './containers/beacons/BeaconNewContainer';
import BeaconEditContainer from './containers/beacons/BeaconEditContainer';
import { getBeaconsRequest, getBeaconRequest } from './actions/beaconsActions';
import { getChairsRequest } from './actions/chairsActions';

import createHistory from "history/createBrowserHistory";
import store from "./store/store";
import { removeMessage } from "./actions/messagesActions";

const history = createHistory()

// Get the current location.
const location = history.location
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
  store.dispatch(removeMessage());
})

export default () => {
  return (
    <Router history={history}>
      <App>
        <Route exact path='/beacons/new' render={ () => {
              store.dispatch(getChairsRequest());
              return <BeaconNewContainer />
        }}/>
        <Route exact path='/beacons/:id/edit' render={ (props) => {
              store.dispatch(getBeaconRequest(props.match.params.id));
              store.dispatch(getChairsRequest());
              return <BeaconEditContainer />
        }}/>
        <Route exact path='/beacons' render={ () => {
              store.dispatch(getBeaconsRequest());
              return <BeaconListContainer />
        }}/>
      </App>
    </Router>
  )
}