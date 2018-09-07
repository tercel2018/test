import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import View from './dom/View'

class App extends Component {
  render() {
    return (
      <div className="App">
         APP:
          <View></View>
      </div>
    );
  }
}

export default App;
