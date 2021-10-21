import logo from './logo.svg';
import './App.css';
import Book from './Book';
import { Component } from 'react';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '',
      book1: { title: "ABC", price: 100 },
      book2: { title: "XYZ", price: 200 },
    }
    this.getTimeButtonClicked = this.getTimeButtonClicked.bind(this);
  }

  getTimeButtonClicked() {
    this.setState({currentTime: new Date().toLocaleTimeString()});
  }

  render() {
    let {book1, book2} = this.state;
    return (
      <div className="App">
          <h1>{this.state.currentTime}</h1>
          <Book 
            callApp={this.getTimeButtonClicked}
            title={book1.title} 
            price={book1.price}></Book>
          <hr/>
          <Book 
            callApp={this.getTimeButtonClicked}
            title={book2.title} 
            price={book2.price}></Book>
      </div>
    );
  }
}

export default Library;
