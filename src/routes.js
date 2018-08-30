import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import BeaconListContainer from './containers/beacons/BeaconListContainer';
import BeaconNewContainer from './containers/beacons/BeaconNewContainer';
import BeaconEditContainer from './containers/beacons/BeaconEditContainer';
import BeaconPanelContainer from './containers/beacons/BeaconPanelContainer';
import ChairNewContainer from './containers/chairs/ChairNewContainer';
import ChairEditContainer from './containers/chairs/ChairEditContainer';
import ChairListContainer from './containers/chairs/ChairListContainer';
import ChairPanel from './components/chairs/ChairPanel';
import FilterPanelContainer from './containers/chairs/FilterPanelContainer';
import ChairPanelContainer from './containers/chairs/ChairPanelContainer';
import { getBeaconsRequest, getBeaconRequest, getBeaconDataRequest, getBeaconDataFromChairRequest } from './actions/beaconsActions';
import { getChairsRequest, getChairRequest, getChairDataRequest } from './actions/chairsActions';
import { getKMeansDataRequest } from './actions/algorithmsActions';
import { setRedirectFalse } from './actions/appActions';

import createHistory from "history/createBrowserHistory";
import store from "./store/store";
import { removeMessage } from "./actions/messagesActions";
import PropsRoute from "./components/PropsRoute";

const history = createHistory();
const location = history.location;
const unlisten = history.listen((location, action) => {
  store.dispatch(setRedirectFalse());
  store.dispatch(removeMessage());
})

export default () => {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' render={ () => {
                store.dispatch(getChairsRequest());
                return <ChairListContainer />
          }}/>
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
          <Route path='/chairs/new' component={ChairNewContainer}/>
          <Route exact path='/chairs/:id/edit' render={ (props) => {
                store.dispatch(getChairRequest(props.match.params.id));
                return <ChairEditContainer />
          }}/>
          <Route exact path='/chairs/:id/panel' render={ (props) => {
                store.dispatch(getChairRequest(props.match.params.id));
                store.dispatch(getChairDataRequest(props.match.params.id, 200));
                store.dispatch(getBeaconDataFromChairRequest(props.match.params.id, 200));
                store.dispatch(getKMeansDataRequest(props.match.params.id, 200));
                return <ChairPanelContainer chairId={props.match.params.id} />
          }}/>
          <Route exact path='/chairs' render={ () => {
                store.dispatch(getChairsRequest());
                return <ChairListContainer />
          }}/>
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  )
}