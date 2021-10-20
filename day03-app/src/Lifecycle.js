import { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''  
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    //CALLED ONLY ONCE for the first time AFTER render is called
    //Used when you want to fire requests to the server and fetch data initially
    componentDidMount() {
        console.log("componentDidMount called");
    }

    //CALLED EVERYTIME AFTER state is updated and render is called
    //Used to send back updates to the server; update cache; update storage
    componentDidUpdate() {
        console.log("componentDidUpdate called");  
    }

    //It gives you a way to bypass updation
    //You can make use of this method to avoid updates to Virtual DOM, if you know for sure there is no change in state
    shouldComponentUpdate(obj, latest) {
        console.log("shouldComponentUpdate called", latest, this.state.message);
        if(latest.message === this.state.message) {
            console.log("=== Nothing to update")
            return false;
        }
		return true;
    }

    buttonClicked() {
        console.log("buttonClicked called")
        this.setState({
            message: new Date().toLocaleTimeString()
        });
    }
    render() {
        console.log("render called");
        return (<div>
            <button onClick={this.buttonClicked}>Click</button>
            <h1>{ this.state.message }</h1>    
        </div>);
    }
}

export default Lifecycle;