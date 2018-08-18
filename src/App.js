import React, { Component } from 'react';
import './App.css';
import ChairPanel from './components/chairs/ChairPanel';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Proximity</h1>
        </header>
        <div className="container">
          <ChairPanel chair_id={1}/>
        </div>
      </div>
    );
  }
}

export default App;
