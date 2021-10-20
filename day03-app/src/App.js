import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './Footer';
import Lab01 from './Lab01';
import MyHeader, { YourHeader } from './Header';
//import Myheader from './Header';

class App extends Component {

  render() {
    return (
      <div className="App"> 
        <MyHeader/>
        <hr/>
        <YourHeader/>
        <br/><br/>
        <Lab01/>
        <br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
