import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GMap from './GMap';
import Accordian from './Accordian';
import Collap from './Collap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Google Maps tester</h2>
        </div>
        <p className="App-intro">
          Testing out react-collapsible
        </p>
        <p> blah</p>
        <p> blah</p>
        <p> blah</p>
        <p> blah</p>
        <p> blah</p>
        <br />
        <Collap />

      </div>
    );
  }
}

export default App;
