import React, { Component } from 'react';
import {Button} from 'antd';
import './App.css';
import AddEntryContainer from "./containers/AddEntryContainer";
import CharacterListContainer from "./containers/CharacterListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{width: '20%', float: 'left'}}>
            <AddEntryContainer/>
        </div>
        <div style={{width: '60%', float: 'left'}}>
            <CharacterListContainer/>
        </div>
        <div style={{width: '20%', float: 'left'}}>
        </div>
      </div>
    );
  }
}

export default App;
