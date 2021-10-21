import { Component } from "react";

 class Input extends Component {
     constructor(props) {
         super(props);
         this.state = {
             name: ''
         };
         this.nameChanged = this.nameChanged.bind(this);
         this.buttonClicked = this.buttonClicked.bind(this);
     }

     nameChanged(e) {
         this.setState({name: e.currentTarget.value});
     }

     buttonClicked() {
        this.props.clickHandler(this.state.name);
     }

     render() {
         return (<div>
             <input type="text" placeholder="Name" onChange={this.nameChanged}></input> <br/>
             <button onClick={this.buttonClicked}>Submit</button>
         </div>);
     }
 }
export default Input;