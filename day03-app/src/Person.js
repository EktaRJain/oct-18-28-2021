import { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div>
            <h1>Name: {this.props.name}</h1>
            <h2>Age: {this.props.age}</h2>
        </div>);
    }
}

export default Person;