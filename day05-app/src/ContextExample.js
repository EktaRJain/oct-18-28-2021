const { Component } = require("react");

class ContextExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: '',
            temperature: '',
            randomNo: ''
        };
        //this.getTime = this.getTime.bind(this);
    }
    getTemperature() {
        this.setState({
            temperature: Math.random() * 40
        });
    }
    getTime() {
        //console.log(this);
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }
    getRandomNo(value) {
        this.setState({
            randomNo: value
        });
    }

    render() {
        return (<div>
            <button onClick={this.getTime.bind(this)}>Get time</button>
            <h1>{this.state.currentTime}</h1> <hr/>
            <button onClick={() => this.getTemperature()}>Get temperature</button>
            <h1>{this.state.temperature}</h1>
            <hr/>
            <button onClick={() => this.getRandomNo(Math.random() * 10000)}>Get random no</button>
            <h1>{this.state.randomNo}</h1>
        </div>);
    }
}
export default ContextExample;