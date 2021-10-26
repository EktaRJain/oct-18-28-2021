import { useState } from "react";

//react hooks
const StateExample = () => {

    const [currentTime, setCurrentTime] = useState('');
    const [temperature, setTemperature] = useState('');
    const [randomNo, setRandomNo] = useState(0);

    const getTimeButtonClicked = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };
    const getTemperatureButtonClicked = () => {
        setTemperature(Math.random() * 50);
    };

    return (<div>
        <h1>State Example</h1>
        <button onClick={getTimeButtonClicked}>Get time</button>
        <h1>{currentTime}</h1>
        <hr/>
        <button onClick={getTemperatureButtonClicked}>Get temperature</button>
        <h1>{temperature}</h1>
        <hr/>
        <button onClick={() => setRandomNo(Math.random() * 1000)}>Get some random number</button>
        <h1>{randomNo}</h1>
    </div>);
};

export default StateExample;