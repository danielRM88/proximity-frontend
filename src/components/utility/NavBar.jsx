import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Home </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-item nav-link active" to="/chairs"> Chairs </Link>
            <Link className="nav-item nav-link active" to="/beacons"> Beacons </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
