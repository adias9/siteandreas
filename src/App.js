import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="jumbotron">
          <h1 className="jumbotron-header" style="font-family: Hiragino Kaku Gothic; font-weight: 700; padding-top: 20vh">andreas dias</h1>
          <p className="jumbotron-body">Technologist, <span role="img" aria-label="soccer_ball">⚽ </span> fan, and design enthusiast. <br /> Constantly working on creating the future.</p>
          <a href="mailto:andreasdias9@gmail.com" target="_blank" rel='noopener noreferrer'>email</a>
          <a href="https://github.com/adias9" target="_blank" rel='noopener noreferrer'>github</a>
          <a href="https://linkedin.com/in/andreas-dias/" target="_blank" rel='noopener noreferrer'>linkedin</a>
          <a href="/">resume</a>
        </div>
      </div>
    );
  }
}

export default App;
