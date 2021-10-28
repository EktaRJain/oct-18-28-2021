import { Component } from "react";

type SampleProps = {
    name: string;
    age: number;
    gender?: string;
};
type SampleState = {
    message: string;
};


class Sample extends Component<SampleProps, SampleState> {
    constructor(props: SampleProps) {
        super(props);
        this.state = {
            message: ''
        };
    }
    getTime() {
        let now = new Date().toLocaleTimeString();
        this.setState({
            message: now
        })
    }
    render() {
        return (<div>
            <h1>Sample {this.props.name}, {this.props.age}</h1>
            <button onClick={() => this.getTime()}>Get time</button>
            <h1>{this.state.message}</h1>
        </div>);
    }
}
export default Sample;