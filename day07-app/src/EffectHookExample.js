import {useEffect, useState} from 'react';

const EffectHookExample = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [temperature, setTemperature] = useState('');
  const [header, setHeader] = useState('');


//componentDidMount, componentDidUpdate
//   useEffect(() => {
//       if(currentTime !== '') {
//         console.log("componentDidMount called");
//       }
//   });

    useEffect(() => {
        if(header === '') {
            fetch('/data.txt')
                .then(response => response.text())
                .then(data => setHeader(data));
        }
    });

    useEffect(() => {
        console.log("useEffect on temperature called");
    }, [temperature]);

    useEffect(() => {
        console.log("useEffect on currenttime called");
    }, [currentTime]);

  return (<div>
      <h1>{header}</h1>
      <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>Get time</button>
      <h1>{currentTime}</h1> <br/>
      <button onClick={() => setTemperature(Math.random() * 50)}>Get temperature</button>
      <h1>{temperature}</h1>
  </div>);
};

export default EffectHookExample;