import { Component } from "react";
import Input from "./Input";
import Output from "./Output";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.computeMessage = this.computeMessage.bind(this);
    }

    computeMessage(name) {
        this.setState({
            message: `Hi ${name}`
        });
    }

    render() {
        return (<div>
            <Input clickHandler={this.computeMessage}/>
            <hr/>
            <Output message={this.state.message}/>
        </div>);
    }
}
export default Parent;