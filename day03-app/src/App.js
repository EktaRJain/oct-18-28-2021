import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './Footer';
import Lab01 from './Lab01';
import MyHeader, { YourHeader } from './Header';
import Game from './lab03/Game';
import StateExample from './StateExample';
import Lifecycle from './Lifecycle';
//import Myheader from './Header';

class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Lifecycle/>
      </div>
    );
  }
  
}

export default App;
