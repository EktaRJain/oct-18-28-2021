import {Component} from 'react';
import CovidGrid from './CovidGrid';
import CovidSummary from './CovidSummary';

class Lab05Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidData: [],
            summaryToDisplay: null
        };
    }

    componentDidMount() {
        let url = "/coviddata";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({covidData: data}));
    }

    displaySummary(country) {
        let {covidData} = this.state;
        let countryInfo = covidData.find(it => it.country === country);
        this.setState({
            summaryToDisplay: countryInfo
        });
    }

    render() {
        return (<div>
            <CovidGrid summaryDisplayHandler={(country) => this.displaySummary(country)} data={this.state.covidData}/>
            <hr/>
            { 
                this.state. summaryToDisplay === null ? 
                <span/> 
                : 
                <CovidSummary data={this.state.summaryToDisplay}/>
            }
        </div>);
    }
}

export default Lab05Main;