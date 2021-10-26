import logo from './logo.svg';
import './App.css';
import Collections from './Collections';
import FuncExample1 from './FuncExample1';
import StateExample from './StateExample';

function App() {
  return (
    <div className="App">
      <FuncExample1 title="Function components"/>
      <br/>
      <br/>
      <StateExample/>
    </div>
  );
}

export default App;
