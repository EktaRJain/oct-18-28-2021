import {Component} from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (<div>
            <h2>Title: {this.props.title}</h2>
            <h3>Price: {this.props.price}</h3>
            <button onClick={this.props.callApp}>
                Get time
            </button>
        </div>);
    }
}

export default Book;