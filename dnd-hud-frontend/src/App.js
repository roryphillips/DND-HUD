import React, { Component } from 'react';
import {Button} from 'antd';
import './App.css';
import AddEntryContainer from "./containers/AddEntryContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddEntryContainer/>
      </div>
    );
  }
}

export default App;
