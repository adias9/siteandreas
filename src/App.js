import React, { Component } from 'react';
import './App.css';
import './css/navigation.scss'
import Navigation from './components/Navigation'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
        <div>
            <Navigation />
            <Main />
        </div>
    );
  }
}

export default App;
