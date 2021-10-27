import React, { useCallback, useState } from "react";

//HOC
const City = React.memo((props) => {
    console.log(`City with props ${props.name} rendered`);
    return (<div>
        <h3>{props.name}</h3>
        <h4>{props.temperature}</h4>
    </div>);
});

const MemoAndCallbacksExample = () => {

    const [temperature1, setTemperature1] = useState('');
    const [temperature2, setTemperature2] = useState('');

    //Memoization
    //Look for the changes to a particular state variable; if the value hasn't changed, just reuse the previous function from the memory
    const modifyTemperatureOfCity1 = useCallback(() => {
        setTemperature1(Math.random() * 50);
    }, [temperature1]);

    const modifyTemperatureOfCity2 = useCallback(() => {
        setTemperature2(Math.random() * 50);
    }, [temperature2]);

    return (<div>
        <City name="Pune" temperature={temperature1}/> 
        <button onClick={modifyTemperatureOfCity1}>Get current temperature</button> 
        <hr/>
        <City name="Chennai" temperature={temperature2}/>        
        <button onClick={modifyTemperatureOfCity2}>Get current temperature</button> 
        <hr/>
    </div>);
};
export default MemoAndCallbacksExample;