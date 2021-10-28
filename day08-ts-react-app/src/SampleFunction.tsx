import { useState } from "react";

type SampleFunctionProps = {
    dummy: string;
}

export const SampleFunction = (props: SampleFunctionProps) => {
    const [randomNumber, setRandomNumber] = useState<number>(Math.random());
    return (<div>
        <h3>{props.dummy}</h3>
        <h1>{randomNumber}</h1>
    </div>);
};