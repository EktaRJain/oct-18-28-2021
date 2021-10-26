import { useState } from "react";

const Lab06 = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loginBtnDisabled, setloginBtnDisabled] = useState(false);
    const [messageCls, setMessageCls] = useState('correct');

    const login = () => {
        if(userName === "admin" && password === "admin123") {
            setMessage("Logging in...");
            setloginBtnDisabled(true);
            setMessageCls('correct');
        } else {
            setMessage("Username or Password is incorrect");
            setMessageCls('incorrect');
        }
    };
    return (<div>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.currentTarget.value)}></input> <br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)}></input> <br/>
        <button disabled={loginBtnDisabled}  onClick={login}>Login</button>
        <h2 className={messageCls}>{message}</h2>
    </div>);
};

export default Lab06;