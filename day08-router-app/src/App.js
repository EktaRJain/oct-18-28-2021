import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import { BookDetails, BookList, Contact, Home } from './MyComponents';

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/books">
          <BookList heading="My library"/>
        </Route>
        <Route exact path="/details/:name" component={BookDetails}></Route>
      </div>
    </HashRouter>
  );
}

export default App;
