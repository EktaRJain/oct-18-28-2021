import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import { SampleFunction } from './SampleFunction';

function App() {
  return (
    <div className="App">
      <Sample name="Sam" age={12}/>
      <hr/>
      <SampleFunction dummy="Dummy data"/>
    </div>
  );
}

export default App;
