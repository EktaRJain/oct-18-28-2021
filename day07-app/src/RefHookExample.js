import {useRef, useState} from 'react';

const RefHookExample = () => {
    const [message, setMessage] = useState("");
    const nameText = useRef(); //React.createRef();
    const btn = useRef();

    const buttonClicked = () => {
        let name = nameText.current.value;
        setMessage(`Hi ${name}`);
        btn.current.style.backgroundColor = "yellow";
    };

    return (<div>
        <input type="text" placeholder="name" ref={nameText}></input><br/>
        <button ref={btn} onClick={buttonClicked}>Click</button>
        <button onClick={() => setMessage(`Hello ${nameText.current.value}`)}>Click</button>
        <h1>{message}</h1>
    </div>)
};

export default RefHookExample;