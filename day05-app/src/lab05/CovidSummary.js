import {Component} from 'react';

class CovidSummary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let  {country, cases, recovered, deaths} = this.props.data;
        return (<div>
            <h3>{country}</h3>
            <h4>Cases: {cases}</h4>
            <h4>Recovered: {recovered}</h4>
            <h5>Deaths: {deaths}</h5>
        </div>);
    }
}

export default CovidSummary;