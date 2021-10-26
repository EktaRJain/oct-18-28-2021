import { useState } from "react";

//react hooks
const StateExample2 = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    

    return (<div>
        <input type="text" onChange={(e) => setName(e.currentTarget.value)}></input>
        <button onClick={() => setMessage(`Hi ${name}`)}>Click</button>
        <h1>{message}</h1>
    </div>);
};

export default StateExample2;