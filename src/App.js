import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import React, { Component } from 'react'
import Message from './components/Message';

 class App extends Component {
  render() {
    return (
      <div>
         <Greet name="dimi" heroName="spider man"><p>this is children props </p> </Greet>
        <Greet name="luna" heroName="wolverine"><button>Action</button> </Greet>
        <Greet name="sahal" heroName="super man"/>
        <Message />
      </div>
    )
  }
}

export default App

