import React, { Component } from 'react';
import Jam3Logo from './jam3-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Jam3Logo} className="App-logo" alt="logo" />
          <p>GIVE ALL THE FUCKS!</p>
          <p>MAKE IT HAPPEN!</p>
          <br/>
          <p>WE CREATE MODERN EXPERIENCES</p>
          <p>FOR TOMORROW'S BRANDS</p>
          <a
            className="App-link"
            href="https://jam3.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAM3
          </a>
        </header>
      </div>
    );
  }
}

export default App;
