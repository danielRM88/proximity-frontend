import React, { Component } from 'react';
import NavBar from './NavBar';
import MessagesContainer from '../containers/MessagesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <MessagesContainer />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;