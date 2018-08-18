import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/utility/NavBar';
import ChairPanel from './components/chairs/ChairPanel';
import ChairNew from './components/chairs/ChairNew';
import ChairEdit from './components/chairs/ChairEdit';
import ChairList from './components/chairs/ChairList';
import BeaconNew from './components/beacons/BeaconNew';
import BeaconEdit from './components/beacons/BeaconEdit';
import BeaconList from './components/beacons/BeaconList';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <div id="messages"></div>
            <Route exact path="/" component={Home} />
            <Route exact path="/chairs" component={ChairList} />
            <Route exact path="/chairs/new" component={ChairNew} />
            <Route exact path="/chairs/:id/edit" component={ChairEdit} />
            <Route exact path="/chairs/:id/panel" component={ChairPanel} />
            <Route exact path="/beacons" component={BeaconList} />
            <Route exact path="/beacons/new" component={BeaconNew} />
            <Route exact path="/beacons/:id/edit" component={BeaconEdit} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
