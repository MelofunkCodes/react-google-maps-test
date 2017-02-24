import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Container from './Container';
// import Home from './Home';
import GMap from './GMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Google Maps tester</h2>
        </div>
        <p className="App-intro">
          Testing out Google Maps API on React...
        </p>
        <GMap />

      </div>
    );
  }
}

export default App;
