import {Component} from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: ''
        };
        this.getTimeButtonClicked = this.getTimeButtonClicked.bind(this);
    }
    getTimeButtonClicked() {
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        }, function() {
            console.log(this.state.currentTime);     
        });
        //console.log(this.state.currentTime); //state is not YET updated 
    }
    render() {
        return (<div>
            <button onClick={this.getTimeButtonClicked}>Get time</button>
            <h1>{this.state.currentTime}</h1>
        </div>);
    }
}

export default StateExample;