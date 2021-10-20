import { Component } from "react";

class Lab01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            message: '',
            messageCls: '',
            valid: false,
            display: 'block',
            person: {},
            car: {
                engine: {}
            },
            books: []
        };
        this.userNameChanged = this.userNameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.loginButtonClicked = this.loginButtonClicked.bind(this);
    }

    userNameChanged(e) {
        this.setState({
            userName: e.currentTarget.value
        });
    }

    passwordChanged(e) {
        this.setState({
            password: e.currentTarget.value
        });
    }

    loginButtonClicked() {
       let {userName, password} = this.state;
       if(userName === "admin" && password === "admin123") {
           this.setState({
               message: 'Logging in',
               messageCls: 'correct',
               valid: true,
               display: 'none'
            });
       } else {
            this.setState({
                message: 'Your username or password is incorrect',
                messageCls: 'wrong',
                valid: false
            });
       }
    }

    render() {
        let loginForm = (<div>
            <h2 style={{display: `${this.state.valid ? 'none' : 'block'}`}}>Heading</h2>
            <label>Username</label>
            <input type="text" onChange={this.userNameChanged}></input> <br/>
            <label>Password</label>
            <input type="password" onChange={this.passwordChanged}></input> <br/>
            <button style={{display: this.state.display}} 
                disabled={this.state.valid} onClick={this.loginButtonClicked}>Login</button>   
            <div className={this.state.messageCls}>{this.state.message}</div>    
        </div>);
        return loginForm;
    }
}

export default Lab01;