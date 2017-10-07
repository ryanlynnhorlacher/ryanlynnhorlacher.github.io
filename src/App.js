import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlyInText from './components/flyInText/FlyInText';
import Pager from './components/pager/Pager';
import Cube from './components/pager/Cube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cube />
      </div>
    );
  }
}

export default App;
