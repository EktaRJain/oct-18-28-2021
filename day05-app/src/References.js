import React, { Component } from "react"

class References extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.nameText = React.createRef();
        this.btn = React.createRef();
        this.mainDiv = React.createRef();
    }
    buttonClicked() {
        let mainDivElem = this.mainDiv.current;
        mainDivElem.style.backgroundColor = 'yellow';

        let nameTextbox = this.nameText.current;
        let name = nameTextbox.value;
        nameTextbox.style.backgroundColor = 'red';

        let btn = this.btn.current;
        btn.disabled = true;
        this.setState({
            message: `Hi ${name}`
        });
    }

    render() {
        return (<div ref={this.mainDiv}>
            <input type="text" ref={this.nameText}></input> <br/>
            <button ref={this.btn} onClick={() => this.buttonClicked()}>Click</button>
            <h1>{this.state.message}</h1>
        </div>);
    }
}
export default References;